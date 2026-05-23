import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Heart, LayoutDashboard, Settings, ShoppingBag } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Heart },
  { to: '/collections', label: 'Collections', icon: LayoutDashboard },
  { to: '/shop', label: 'Shop', icon: ShoppingBag },
  { to: '/settings', label: 'Settings', icon: Settings }
];

export function AppShell() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        className="sticky top-0 z-50 bg-[var(--bg-surface)]/90 backdrop-blur-xl border-b border-[var(--border)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Heart className="text-rose-400 mr-2" size={24} />
              <span className="text-xl font-serif font-bold bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">LoveBloom</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map(item => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1",
                      isActive
                        ? "bg-[var(--brand-500)]/20 text-[var(--brand-500)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    <item.icon size={16} />
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[var(--bg-surface)]/90 backdrop-blur-xl border-t border-[var(--border)] pb-[env(safe-area-inset-bottom)]"
      >
        <div className="flex justify-around h-16 items-center">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => cn(
                "flex-1 flex flex-col items-center justify-center text-xs font-medium transition-colors",
                isActive
                  ? "text-[var(--brand-500)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </div>
  );
}