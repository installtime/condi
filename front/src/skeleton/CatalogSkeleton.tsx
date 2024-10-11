"use client";

import styles from "./CatalogSkeleton.module.css";

export const SkeletonCatalog = () => {
  return (
    <main>
      <div className={`container ${styles.storeLayout}`}>
        <div className={styles.storeChildren}></div>
      </div>
    </main>
  );
};
