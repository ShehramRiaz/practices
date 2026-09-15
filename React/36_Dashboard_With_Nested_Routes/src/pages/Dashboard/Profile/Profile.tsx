import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <div>
          <h1>Profile</h1>
          <p>Manage your personal information.</p>
        </div>
      </div>

      <section className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>S</div>

          <div>
            <h2>Shehram</h2>
            <p>Student</p>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.info}>
            <span>Full Name</span>
            <strong>Shehram</strong>
          </div>

          <div className={styles.info}>
            <span>Email Address</span>
            <strong>shehram@example.com</strong>
          </div>

          <div className={styles.info}>
            <span>Role</span>
            <strong>Student</strong>
          </div>

          <div className={styles.info}>
            <span>Account Status</span>
            <strong className={styles.status}>Active</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
