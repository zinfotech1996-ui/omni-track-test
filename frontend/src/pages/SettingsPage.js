import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { User, Mail, Shield } from 'lucide-react';

export const SettingsPage = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6" data-testid="settings-page">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Settings
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mt-2">
          Manage your profile and preferences
        </p>
      </div>

      {/* Profile Section */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Profile Information
        </h2>
        <div className="space-y-4 max-w-2xl">
          <div>
            <Label htmlFor="name">Name</Label>
            <div className="flex items-center gap-2 mt-2">
              <User className="h-5 w-5 text-muted-foreground" />
              <Input id="name" value={user?.name || ''} disabled />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <Input id="email" value={user?.email || ''} disabled />
            </div>
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <div className="flex items-center gap-2 mt-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <Input id="role" value={user?.role || ''} disabled className="capitalize" />
            </div>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Appearance
        </h2>
        <div className="flex items-center justify-between max-w-2xl">
          <div>
            <div className="font-medium">Theme</div>
            <div className="text-sm text-muted-foreground">Current: {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</div>
          </div>
          <Button onClick={toggleTheme} data-testid="theme-toggle-settings">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>
      </div>

      {/* Language (Placeholder) */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Language
        </h2>
        <div className="flex items-center justify-between max-w-2xl">
          <div>
            <div className="font-medium">Display Language</div>
            <div className="text-sm text-muted-foreground">Coming soon: Multi-language support</div>
          </div>
        </div>
      </div>
    </div>
  );
};
