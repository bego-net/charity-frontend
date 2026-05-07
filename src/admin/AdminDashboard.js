// src/admin/AdminDashboard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageSquare,
  Mail,
  MailOpen,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ total: 0, unread: 0, read: 0 });
  const [loading, setLoading] = useState(true);
  const [recentMessages, setRecentMessages] = useState([]);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/messages`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
        return;
      }

      const data = await res.json();
      if (data.success) {
        const messages = data.messages;
        setStats({
          total: messages.length,
          unread: messages.filter((m) => !m.isRead).length,
          read: messages.filter((m) => m.isRead).length,
        });
        setRecentMessages(messages.slice(0, 5));
      }
    } catch (err) {
      console.error("Failed to load stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statCards = [
    {
      label: "Total Messages",
      value: stats.total,
      icon: MessageSquare,
      color: "emerald",
      bgLight: "bg-emerald-100",
      bgDark: "dark:bg-emerald-500/10",
      borderLight: "border-emerald-200",
      borderDark: "dark:border-emerald-500/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "Unread",
      value: stats.unread,
      icon: Mail,
      color: "amber",
      bgLight: "bg-amber-100",
      bgDark: "dark:bg-amber-500/10",
      borderLight: "border-amber-200",
      borderDark: "dark:border-amber-500/20",
      textColor: "text-amber-600 dark:text-amber-400",
    },
    {
      label: "Read",
      value: stats.read,
      icon: MailOpen,
      color: "sky",
      bgLight: "bg-sky-100",
      bgDark: "dark:bg-sky-500/10",
      borderLight: "border-sky-200",
      borderDark: "dark:border-sky-500/20",
      textColor: "text-sky-600 dark:text-sky-400",
    },
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Dashboard
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Overview of your admin panel
          </p>
        </div>
        <button
          onClick={fetchStats}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-all"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-10 h-10 ${card.bgLight} ${card.bgDark} border ${card.borderLight} ${card.borderDark} rounded-xl flex items-center justify-center`}
              >
                <card.icon size={20} className={card.textColor} />
              </div>
            </div>
            <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">
              {loading ? "—" : card.value}
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {card.label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Messages */}
      <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">
            Recent Messages
          </h3>
          <button
            onClick={() => navigate("/admin/messages")}
            className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            View All <ArrowRight size={14} />
          </button>
        </div>

        {loading ? (
          <div className="p-8 text-center">
            <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mx-auto" />
          </div>
        ) : recentMessages.length === 0 ? (
          <div className="p-8 text-center text-slate-400 dark:text-slate-500 text-sm">
            No messages yet.
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {recentMessages.map((msg) => (
              <div
                key={msg._id}
                className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer"
                onClick={() => navigate("/admin/messages")}
              >
                <div
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    msg.isRead
                      ? "bg-slate-300 dark:bg-slate-600"
                      : "bg-emerald-500"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p
                      className={`text-sm truncate ${
                        msg.isRead
                          ? "text-slate-500 dark:text-slate-400"
                          : "text-slate-900 dark:text-white font-bold"
                      }`}
                    >
                      {msg.name}
                    </p>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 shrink-0">
                      {formatDate(msg.createdAt)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 truncate mt-0.5">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
