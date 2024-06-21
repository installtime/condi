import styles from "./CategoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.catalogList}>
      <div className={styles.catalogListContainer}>
        <ul className={styles.categoryList}>
          <li>
            <span className={styles.parentCategory}>Сплит-системы Haier</span>
            <ul className={`border-bottom ${styles.categoryList}`}>
              <li className={styles.categoryListItem}>
                Настенные кондиционеры
              </li>
              <li className={styles.categoryListItem}>
                Напольные сплит-системы
              </li>
              <li className={styles.categoryListItem}>
                Сплит-системы для промышленных зданий
              </li>
              <li className={styles.categoryListItem}>
                Универсальные сплит-системы
              </li>
            </ul>
          </li>
        </ul>
        <ul className={styles.categoryList}>
          <li>
            <span className={styles.parentCategory}>Сплит-системы Haier</span>
            <ul className={`border-bottom ${styles.categoryList}`}>
              <li className={styles.categoryListItem}>
                Настенные кондиционеры
              </li>
              <li className={styles.categoryListItem}>
                Напольные сплит-системы
              </li>
              <li className={styles.categoryListItem}>
                Сплит-системы для промышленных зданий
              </li>
              <li className={styles.categoryListItem}>
                Универсальные сплит-системы
              </li>
            </ul>
          </li>
        </ul>
        <ul className={styles.categoryList}>
          <li>
            <span className={styles.parentCategory}>Сплит-системы Haier</span>
            <ul className={`border-bottom ${styles.categoryList}`}>
              <li className={styles.categoryListItem}>
                Настенные кондиционеры
              </li>
              <li className={styles.categoryListItem}>
                Напольные сплит-системы
              </li>
              <li className={styles.categoryListItem}>
                Сплит-системы для промышленных зданий
              </li>
              <li className={styles.categoryListItem}>
                Универсальные сплит-системы
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
