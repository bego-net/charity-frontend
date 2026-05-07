import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, MailOpen, Trash2, RefreshCw, ChevronDown, ChevronUp, Phone, Clock, User } from "lucide-react";

const AdminMessages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("all");

  const token = localStorage.getItem("adminToken");
  const API = process.env.REACT_APP_BACKEND_URL;

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/admin/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { localStorage.removeItem("adminToken"); navigate("/admin-login"); return; }
      const data = await res.json();
      if (data.success) setMessages(data.messages);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchMessages(); /* eslint-disable-next-line */ }, []);

  const toggleRead = async (id) => {
    try {
      const res = await fetch(`${API}/api/admin/messages/${id}/toggle-read`, {
        method: "PATCH", headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) => prev.map((m) => (m._id === id ? data.message : m)));
      }
    } catch (err) { console.error(err); }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      const res = await fetch(`${API}/api/admin/messages/${id}`, {
        method: "DELETE", headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) => prev.filter((m) => m._id !== id));
        if (expandedId === id) setExpandedId(null);
      }
    } catch (err) { console.error(err); }
  };

  const formatDateTime = (d) => {
    const date = new Date(d);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) + " at " +
      date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  const filtered = filter === "all" ? messages : filter === "unread" ? messages.filter((m) => !m.isRead) : messages.filter((m) => m.isRead);
  const unreadCount = messages.filter((m) => !m.isRead).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Messages</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{messages.length} total · {unreadCount} unread</p>
        </div>
        <div className="flex items-center gap-2">
          {["all", "unread", "read"].map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${filter === f ? "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent"}`}>
              {f}
            </button>
          ))}
          <button onClick={fetchMessages} disabled={loading}
            className="ml-2 p-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-emerald-600 transition-colors">
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* Messages List */}
      {loading ? (
        <div className="flex justify-center py-16"><div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" /></div>
      ) : filtered.length === 0 ? (
        <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-12 text-center">
          <Mail size={32} className="mx-auto text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-slate-400 dark:text-slate-500 text-sm">No messages found.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((msg) => (
            <div key={msg._id} className={`bg-white dark:bg-white/[0.03] border rounded-2xl overflow-hidden transition-all ${!msg.isRead ? "border-emerald-200 dark:border-emerald-500/20 shadow-sm" : "border-slate-200 dark:border-white/10"}`}>
              {/* Row */}
              <div className="flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors" onClick={() => setExpandedId(expandedId === msg._id ? null : msg._id)}>
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${msg.isRead ? "bg-slate-300 dark:bg-slate-600" : "bg-emerald-500 shadow-sm shadow-emerald-500/50"}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm truncate ${msg.isRead ? "text-slate-500 dark:text-slate-400" : "text-slate-900 dark:text-white font-bold"}`}>{msg.name}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 shrink-0 hidden sm:inline">{msg.email}</span>
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 truncate mt-0.5">{msg.message}</p>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 shrink-0 hidden sm:block">{formatDateTime(msg.createdAt)}</span>
                {expandedId === msg._id ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
              </div>

              {/* Expanded Detail */}
              {expandedId === msg._id && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-white/5">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm"><User size={14} className="text-slate-400" /><span className="text-slate-600 dark:text-slate-300">{msg.name}</span></div>
                    <div className="flex items-center gap-2 text-sm"><Mail size={14} className="text-slate-400" /><a href={`mailto:${msg.email}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">{msg.email}</a></div>
                    {msg.phone && <div className="flex items-center gap-2 text-sm"><Phone size={14} className="text-slate-400" /><span className="text-slate-600 dark:text-slate-300">{msg.phone}</span></div>}
                    <div className="flex items-center gap-2 text-sm"><Clock size={14} className="text-slate-400" /><span className="text-slate-600 dark:text-slate-300">{formatDateTime(msg.createdAt)}</span></div>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 mb-4">
                    <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => toggleRead(msg._id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-widest bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-white/10">
                      {msg.isRead ? <><Mail size={14} /> Mark Unread</> : <><MailOpen size={14} /> Mark Read</>}
                    </button>
                    <button onClick={() => deleteMessage(msg._id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-widest bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors border border-red-200 dark:border-red-500/20">
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
