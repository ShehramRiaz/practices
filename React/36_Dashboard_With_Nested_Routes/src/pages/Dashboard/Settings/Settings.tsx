import styles from "./Settings.module.css";

function Settings() {
  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <h1>Settings</h1>
        <p>Customize your dashboard preferences.</p>
      </div>

      <section className={styles.card}>
        <div className={styles.section}>
          <div>
            <h2>Appearance</h2>
            <p>Choose how the dashboard looks for you.</p>
          </div>

          <div className={styles.setting}>
            <div>
              <strong>Theme</strong>
              <span>Current interface theme</span>
            </div>
            <span className={styles.badge}>Dark</span>
          </div>
        </div>

        <div className={styles.section}>
          <div>
            <h2>Language</h2>
            <p>Select your preferred language.</p>
          </div>

          <div className={styles.setting}>
            <div>
              <strong>Language</strong>
              <span>Dashboard display language</span>
            </div>
            <span className={styles.badge}>English</span>
          </div>
        </div>

        <div className={styles.section}>
          <div>
            <h2>Notifications</h2>
            <p>Control how you receive notifications.</p>
          </div>

          <div className={styles.setting}>
            <div>
              <strong>Email Notifications</strong>
              <span>Receive updates through email</span>
            </div>

            <div className={styles.badge}>Enabled</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Settings;
