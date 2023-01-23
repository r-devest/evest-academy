import React, { useState } from "react";
import styles from "../../styles/topics/Tabs.module.css";
import AllCourses from "../../pages/Topics/courses/AllCourses";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Beginner", "Intermediate", "Advanced", "All"];
  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tabs_container}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={activeTab === index ? styles.tab_active : styles.tab}
            onClick={() => handleClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 0 && <div>Beginner Tab Content</div>}
        {activeTab === 1 && <div>Intermediate Tab Content</div>}
        {activeTab === 2 && <div>Advanced Tab Content</div>}
        {activeTab === 3 && (
          <div>
            <AllCourses />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
