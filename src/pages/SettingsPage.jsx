import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  CreditCard,
  Truck,
  HelpCircle
} from 'lucide-react';
import { setTheme } from '../store/slices/uiSlice';
import { addNotification } from '../store/slices/uiSlice';
import './SettingsPage.css';

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.ui);
  
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    orderUpdates: true,
    twoFactorAuth: false,
    savePaymentInfo: true,
    autoShipping: false,
    language: 'en',
    currency: 'USD'
  });

  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567'
  });

  const handleSettingToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
    
    dispatch(addNotification({
      type: 'success',
      message: 'Setting updated successfully',
      duration: 2000
    }));
  };

  const handleThemeChange = (newTheme) => {
    dispatch(setTheme(newTheme));
    dispatch(addNotification({
      type: 'success',
      message: `Theme changed to ${newTheme}`,
      duration: 2000
    }));
  };

  const handleProfileUpdate = () => {
    dispatch(addNotification({
      type: 'success',
      message: 'Profile updated successfully',
      duration: 3000
    }));
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all your data? This action cannot be undone.')) {
      dispatch(addNotification({
        type: 'info',
        message: 'Data cleared successfully',
        duration: 3000
      }));
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <motion.div
          className="settings-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Settings</h1>
          <p>Manage your account preferences and app settings</p>
        </motion.div>

        <div className="settings-sections">
          {/* Profile Settings */}
          <motion.div
            className="settings-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="settings-section-header">
              <h2>
                <User size={20} />
                Profile Information
              </h2>
              <p>Update your personal information</p>
            </div>
            <div className="settings-section-content">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={profile.firstName}
                  onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={profile.lastName}
                  onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <button className="settings-button primary" onClick={handleProfileUpdate}>
                Update Profile
              </button>
            </div>
          </motion.div>

          {/* Appearance Settings */}
          <motion.div
            className="settings-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="settings-section-header">
              <h2>
                <Palette size={20} />
                Appearance
              </h2>
              <p>Customize how the app looks</p>
            </div>
            <div className="settings-section-content">
              <div className="form-group">
                <label>Theme</label>
                <div className="theme-options">
                  <div 
                    className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                    onClick={() => handleThemeChange('light')}
                  >
                    <div className="theme-preview light"></div>
                    <span>Light</span>
                  </div>
                  <div 
                    className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                    onClick={() => handleThemeChange('dark')}
                  >
                    <div className="theme-preview dark"></div>
                    <span>Dark</span>
                  </div>
                  <div 
                    className={`theme-option ${theme === 'auto' ? 'active' : ''}`}
                    onClick={() => handleThemeChange('auto')}
                  >
                    <div className="theme-preview auto"></div>
                    <span>Auto</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notification Settings */}
          <motion.div
            className="settings-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="settings-section-header">
              <h2>
                <Bell size={20} />
                Notifications
              </h2>
              <p>Control what notifications you receive</p>
            </div>
            <div className="settings-section-content">
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Email Notifications</h3>
                  <p>Receive notifications via email</p>
                </div>
                <div 
                  className={`settings-toggle ${settings.emailNotifications ? 'active' : ''}`}
                  onClick={() => handleSettingToggle('emailNotifications')}
                >
                  <div className="settings-toggle-handle"></div>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Push Notifications</h3>
                  <p>Receive push notifications on your device</p>
                </div>
                <div 
                  className={`settings-toggle ${settings.pushNotifications ? 'active' : ''}`}
                  onClick={() => handleSettingToggle('pushNotifications')}
                >
                  <div className="settings-toggle-handle"></div>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Marketing Emails</h3>
                  <p>Receive promotional offers and updates</p>
                </div>
                <div 
                  className={`settings-toggle ${settings.marketingEmails ? 'active' : ''}`}
                  onClick={() => handleSettingToggle('marketingEmails')}
                >
                  <div className="settings-toggle-handle"></div>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Order Updates</h3>
                  <p>Get notified about order status changes</p>
                </div>
                <div 
                  className={`settings-toggle ${settings.orderUpdates ? 'active' : ''}`}
                  onClick={() => handleSettingToggle('orderUpdates')}
                >
                  <div className="settings-toggle-handle"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Security Settings */}
          <motion.div
            className="settings-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="settings-section-header">
              <h2>
                <Shield size={20} />
                Security & Privacy
              </h2>
              <p>Manage your security preferences</p>
            </div>
            <div className="settings-section-content">
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Two-Factor Authentication</h3>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <div 
                  className={`settings-toggle ${settings.twoFactorAuth ? 'active' : ''}`}
                  onClick={() => handleSettingToggle('twoFactorAuth')}
                >
                  <div className="settings-toggle-handle"></div>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Save Payment Information</h3>
                  <p>Securely store payment methods for faster checkout</p>
                </div>
                <div 
                  className={`settings-toggle ${settings.savePaymentInfo ? 'active' : ''}`}
                  onClick={() => handleSettingToggle('savePaymentInfo')}
                >
                  <div className="settings-toggle-handle"></div>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Change Password</h3>
                  <p>Update your account password</p>
                </div>
                <button className="settings-button">Change Password</button>
              </div>
            </div>
          </motion.div>

          {/* Preferences */}
          <motion.div
            className="settings-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="settings-section-header">
              <h2>
                <Globe size={20} />
                Preferences
              </h2>
              <p>Set your language and regional preferences</p>
            </div>
            <div className="settings-section-content">
              <div className="form-group">
                <label htmlFor="language">Language</label>
                <select
                  id="language"
                  value={settings.language}
                  onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="currency">Currency</label>
                <select
                  id="currency"
                  value={settings.currency}
                  onChange={(e) => setSettings(prev => ({ ...prev, currency: e.target.value }))}
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="CAD">CAD ($)</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Data Management */}
          <motion.div
            className="settings-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="settings-section-header">
              <h2>
                <HelpCircle size={20} />
                Data Management
              </h2>
              <p>Manage your data and account</p>
            </div>
            <div className="settings-section-content">
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Export Data</h3>
                  <p>Download a copy of your data</p>
                </div>
                <button className="settings-button">Export Data</button>
              </div>
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Clear Cache</h3>
                  <p>Clear stored data to free up space</p>
                </div>
                <button className="settings-button">Clear Cache</button>
              </div>
              <div className="settings-item">
                <div className="settings-item-info">
                  <h3>Delete Account</h3>
                  <p>Permanently delete your account and all data</p>
                </div>
                <button className="settings-button danger" onClick={handleClearData}>
                  Delete Account
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;