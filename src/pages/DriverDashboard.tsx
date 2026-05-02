import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Truck, 
  MapPin, 
  ClipboardCheck, 
  Clock, 
  AlertTriangle, 
  MessageSquare, 
  ChevronRight,
  Navigation,
  FileText,
  Settings,
  User,
  ShieldCheck,
  Save,
  Award,
  Bell,
  X,
  CloudRain,
  Car,
  PackageX,
  Info
} from "lucide-react";
import { Link } from "react-router-dom";
import DispatchChat from "../components/DispatchChat";

export interface DriverProfile {
  name: string;
  email: string;
  phone: string;
  cdlNumber: string;
  vehicleId: string;
  certifications: string[];
  medicalExpiry: string;
}

export default function DriverDashboard() {
  const [profile, setProfile] = useState<DriverProfile>({
    name: "Ezekiel",
    email: "ezekiel@usafreight.com",
    phone: "+1 (555) 012-3456",
    cdlNumber: "TX-123456789",
    vehicleId: "TX-7482",
    certifications: ["Hazmat (H)", "Tanker (N)", "Doubles/Triples (T)"],
    medicalExpiry: "2026-12-15"
  });

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [editProfile, setEditProfile] = useState<DriverProfile>(profile);
  
  const driverId = "driver-ezekiel-001"; // Consistent ID for chat room
  
  const stats = [
    { label: "Hours Remaining", value: "8h 12m", color: "text-green-500" },
    { label: "Weekly Mileage", value: "2,482", color: "text-brand-blue" },
    { label: "Safety Score", value: "98.4", color: "text-brand-orange" }
  ];

  const quickActions = [
    { label: "Pre-Trip Inspection", icon: ClipboardCheck, color: "bg-brand-blue" },
    { label: "View Active Route", icon: Navigation, color: "bg-brand-orange" },
    { label: "Scan Bills (BOL)", icon: FileText, color: "bg-gray-800" },
    { label: "Emergency Assist", icon: AlertTriangle, color: "bg-red-600" }
  ];

  const [notifications, setNotifications] = useState([
    { 
      id: "1",
      type: "delivery", 
      title: "Delivery Exception", 
      time: "24m ago", 
      message: "Receiver at Birmingham Distribution reported partial shortage. Please verify BOL.",
      critical: true,
      icon: PackageX,
      color: "border-red-500",
      iconBg: "bg-red-50 text-red-500",
      action: { label: "Verify BOL", link: "/documents" }
    },
    { 
      id: "2",
      type: "traffic", 
      title: "Traffic Congestion", 
      time: "10m ago", 
      message: "Major accident on I-10 E. Expect 35min delay. Rerouting suggested.",
      critical: true,
      icon: Car,
      color: "border-brand-orange",
      iconBg: "bg-orange-50 text-brand-orange",
      action: { label: "Reroute", link: "/active-trip" }
    },
    { 
      id: "3",
      type: "weather", 
      title: "Weather Warning", 
      time: "1h ago", 
      message: "Heavy rain and high winds expected on your route near Meridian, MS.",
      critical: false,
      icon: CloudRain,
      color: "border-blue-500",
      iconBg: "bg-blue-50 text-blue-500"
    },
    { 
      id: "4",
      type: "info", 
      title: "Dispatch Note", 
      time: "2h ago", 
      message: "Next reload available at Atlanta Hub. Target window: 19:00.",
      critical: false,
      icon: Info,
      color: "border-gray-200",
      iconBg: "bg-gray-50 text-gray-400"
    }
  ]);

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] pb-24 lg:pb-12 pt-24 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header / Identity */}
        <header className="flex items-center justify-between mb-8">
           <button 
            onClick={() => setIsProfileOpen(true)}
            className="text-left group"
          >
             <div className="text-[10px] font-black uppercase tracking-widest text-brand-gray mb-1">On Duty // Active</div>
             <div className="flex items-center gap-2">
               <h1 className="text-2xl font-black text-brand-blue tracking-tighter uppercase group-hover:text-brand-orange transition-colors">
                 Welcome, {profile.name}
               </h1>
               <Settings className="w-4 h-4 text-gray-300 group-hover:rotate-90 transition-transform" />
             </div>
             <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Unit {profile.vehicleId} // KW T680</span>
             </div>
           </button>
           <button className="relative p-2 bg-white rounded-full shadow-sm">
             <Bell className="w-5 h-5 text-brand-blue" />
             <span className="absolute top-1 right-1 w-2 h-2 bg-brand-orange rounded-full border-2 border-white" />
           </button>
        </header>

        {/* Dynamic Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-3 rounded-xl shadow-sm border-b-2 border-transparent hover:border-brand-orange transition-all"
            >
              <div className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</div>
              <div className={`text-sm md:text-lg font-black ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions Grid - Mobile Primary */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {quickActions.map((action, i) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 active:scale-95 transition-all text-center aspect-square"
            >
              <div className={`${action.color} p-4 rounded-2xl text-white mb-4 shadow-lg`}>
                <action.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue leading-tight px-2">
                {action.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active Load / Trip Status */}
        <div className="bg-brand-blue rounded-3xl p-6 mb-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange opacity-10 rounded-full -mr-10 -mt-10" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
               <div className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest">Active Load #4829</div>
               <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span className="text-[10px] font-bold">ETA: 14:30</span>
               </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand-orange ring-4 ring-brand-orange/20" />
                    <div className="w-0.5 h-10 bg-white/20 my-1" />
                    <div className="w-3 h-3 rounded-full border-2 border-white/50" />
                  </div>
                  <div className="flex-1">
                     <div className="mb-6">
                        <div className="text-[8px] uppercase font-bold tracking-widest text-white/50 mb-1">Pick Up</div>
                        <div className="text-sm font-bold">Houston Port, Terminal B</div>
                        <div className="text-[10px] text-white/70">Completed 08:00 AM</div>
                     </div>
                     <div>
                        <div className="text-[8px] uppercase font-bold tracking-widest text-white/50 mb-1">Delivery</div>
                        <div className="text-sm font-bold">Birmingham Distribution</div>
                        <div className="text-[10px] text-white/70">342 Miles Remaining</div>
                     </div>
                  </div>
               </div>
            </div>

            <Link 
              to="/active-trip"
              className="w-full mt-8 flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all group"
            >
               <span className="text-[11px] font-black uppercase tracking-widest">Open Trip Logistics</span>
               <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Notifications / Feed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
             <h2 className="text-xs font-black uppercase tracking-widest text-brand-blue">Operational Alerts</h2>
             {notifications.length > 0 && (
               <button 
                onClick={clearAll}
                className="text-[9px] font-bold text-brand-orange uppercase hover:underline"
              >
                Clear All
              </button>
             )}
          </div>
          
          <AnimatePresence mode="popLayout">
            {notifications.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-12 rounded-3xl border border-dashed border-gray-200 text-center"
              >
                <Bell className="w-8 h-8 text-gray-200 mx-auto mb-3" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">No active alerts</p>
              </motion.div>
            ) : (
              notifications.map((note) => (
                <motion.div 
                  key={note.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`bg-white p-4 rounded-xl shadow-sm border-l-4 ${note.color} flex items-start gap-4 transition-all hover:shadow-md relative overflow-hidden`}
                >
                   {note.critical && (
                     <div className="absolute top-0 right-0 w-12 h-12 bg-red-500 opacity-5 -mr-6 -mt-6 rounded-full" />
                   )}
                   
                   <div className={`${note.iconBg} p-2 rounded-lg`}>
                      <note.icon className="w-4 h-4" />
                   </div>
                   
                   <div className="flex-1 text-left">
                      <div className="flex items-center justify-between mb-1">
                         <div className="flex items-center gap-2">
                           <span className="text-[10px] font-black uppercase text-brand-blue">{note.title}</span>
                           {note.critical && (
                             <span className="px-1.5 py-0.5 bg-red-100 text-red-600 text-[7px] font-black uppercase rounded tracking-widest">Critical</span>
                           )}
                         </div>
                         <div className="flex items-center gap-3">
                           <span className="text-[8px] font-bold text-gray-400">{note.time}</span>
                           <button 
                            onClick={() => dismissNotification(note.id)}
                            className="text-gray-300 hover:text-gray-500 transition-colors"
                           >
                             <X className="w-3 h-3" />
                           </button>
                         </div>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-tight mb-3">{note.message}</p>
                      
                      {note.action && (
                        <div className="flex gap-2">
                          <Link 
                            to={note.action.link}
                            className={`px-3 py-1.5 ${note.type === 'delivery' ? 'bg-red-500' : 'bg-brand-orange'} text-white text-[9px] font-black uppercase tracking-widest rounded transition-all hover:scale-105 active:scale-95`}
                          >
                            {note.action.label}
                          </Link>
                          <button 
                            onClick={() => dismissNotification(note.id)}
                            className="px-3 py-1.5 bg-gray-50 text-gray-400 text-[9px] font-black uppercase tracking-widest rounded hover:bg-gray-100 transition-all font-sans"
                          >
                            Dismiss
                          </button>
                        </div>
                      )}
                   </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-3 px-6 flex items-center justify-between md:hidden z-50">
         <button className="flex flex-col items-center gap-1 text-brand-orange">
            <Truck className="w-6 h-6" />
            <span className="text-[8px] font-black uppercase">Home</span>
         </button>
         <button className="flex flex-col items-center gap-1 text-gray-400">
            <MapPin className="w-6 h-6" />
            <span className="text-[8px] font-black uppercase">Fleet</span>
         </button>
         <div className="relative -mt-10">
           <button className="bg-brand-blue w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-[#F0F2F5]">
              <Navigation className="w-6 h-6" />
           </button>
         </div>
         <button className="flex flex-col items-center gap-1 text-gray-400">
            <MessageSquare className="w-6 h-6" />
            <span className="text-[8px] font-black uppercase">Log</span>
         </button>
         <button 
            onClick={() => setIsProfileOpen(true)}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-brand-orange"
          >
            <User className="w-6 h-6" />
            <span className="text-[8px] font-black uppercase">Profile</span>
         </button>
      </nav>

      {/* Profile Modal */}
      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProfileOpen(false)}
              className="absolute inset-0 bg-brand-blue/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="relative w-full max-w-2xl bg-white rounded-t-[40px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Profile Header */}
              <div className="bg-brand-blue p-6 pb-10 md:p-8 md:pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full -mr-20 -mt-20" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-orange rounded-2xl md:rounded-3xl flex items-center justify-center text-white shadow-xl rotate-3">
                      <User size={32} className="-rotate-3 md:hidden" />
                      <User size={40} className="-rotate-3 hidden md:block" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">Driver Profile</h2>
                      <p className="text-white/60 text-[9px] md:text-[10px] font-black uppercase tracking-widest mt-1">Management Console</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsProfileOpen(false)}
                    className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-xl md:rounded-2xl text-white transition-colors"
                  >
                    <X size={20} className="md:hidden" />
                    <X size={24} className="hidden md:block" />
                  </button>
                </div>
              </div>

              {/* Profile Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 -mt-6 bg-white rounded-t-[30px] md:rounded-t-[40px] relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Basic Info */}
                  <div className="space-y-6">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#E85D04] flex items-center gap-2">
                       <User size={14} /> Personal Details
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          value={editProfile.name}
                          onChange={(e) => setEditProfile({...editProfile, name: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-brand-blue focus:ring-2 focus:ring-brand-orange/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Phone Line</label>
                        <input 
                          type="text" 
                          value={editProfile.phone}
                          onChange={(e) => setEditProfile({...editProfile, phone: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-brand-blue focus:ring-2 focus:ring-brand-orange/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          value={editProfile.email}
                          onChange={(e) => setEditProfile({...editProfile, email: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-brand-blue focus:ring-2 focus:ring-brand-orange/20 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Certifications & Compliance */}
                  <div className="space-y-6">
                    <h3 className="text-xs font-black uppercase tracking-widest text-brand-blue flex items-center gap-2">
                       <ShieldCheck size={14} /> Compliance & Safety
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">CDL Number</label>
                        <div className="bg-brand-light border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-brand-blue">
                          {profile.cdlNumber}
                          <span className="ml-2 text-[8px] text-brand-orange">(Verified)</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Medical Expiry</label>
                        <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                           <span className="text-sm font-bold text-brand-blue">{profile.medicalExpiry}</span>
                           <Clock size={14} className="text-brand-orange" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Active Endorsements</label>
                        <div className="flex flex-wrap gap-2">
                          {profile.certifications.map((cert) => (
                            <span key={cert} className="px-3 py-1 bg-brand-blue text-white text-[9px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1">
                              <Award size={10} /> {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center gap-4">
                 <button 
                  onClick={() => setIsProfileOpen(false)}
                  className="flex-1 px-6 py-4 bg-white border border-gray-200 text-gray-400 text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-gray-100 transition-all"
                 >
                   Discard Changes
                 </button>
                 <button 
                  onClick={() => {
                    setProfile(editProfile);
                    setIsProfileOpen(false);
                  }}
                  className="flex-[2] px-6 py-4 bg-brand-orange text-white text-[11px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-brand-orange/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                 >
                   <Save size={16} /> Save Profile Data
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <DispatchChat driverId={driverId} />
    </div>
  );
}
