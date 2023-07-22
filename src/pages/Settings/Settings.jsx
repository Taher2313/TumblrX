/* eslint-disable react/jsx-filename-extension */
import React from "react";
import SettingsNavbar from "../../components/SettingsNavbar/SettingsNavbar";
import styles from "./Settings.module.css";
import Account from "../../components/Account/Account";
import Dashboard from "../../components/Dashboard/Dashboard";
import Notifictions from "../../components/Notifications/Notifictions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../../components/Layouts/NavBar/NavBar";
/**
 * Component to render the settings page with its different routes
 * @author Abdalla Mahmoud
 *
 * @component
 *
 */
/**
 * this function is responsible render the Settings page
 * @function
 * @returns {jsx} return jsx to be renderd
 */
const Settings = function () {
  return (
    <>
      <NavBar />
      <Router>
        <div className={styles.contanier}>
          <div className={styles["left-side"]}>
            <Switch>
              <Route path="/settings/account" exact>
                <Account />
              </Route>
              <Route path="/settings/dashboard" exact>
                <Dashboard />
              </Route>
              <Route path="/settings/notifications" exact>
                <Notifictions />
              </Route>
            </Switch>
          </div>
          <div className={styles["aside-bar"]}>
            <SettingsNavbar />
          </div>
        </div>
      </Router>
    </>
  );
};

export default Settings;
