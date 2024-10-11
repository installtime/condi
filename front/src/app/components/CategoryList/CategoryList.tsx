"use client";
import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryList: React.FC<any> = ({ list }) => {
  const pathname = usePathname();

  const slugPath = pathname.split("/").pop();

  return (
    <div className={styles.catalogList}>
      <div className={styles.catalogListContainer}>
        <ul className={styles.categoryList}>
          <li>
            <span className={styles.parentCategory}>Сплит-системы Haier</span>
            <ul className={`${styles.categoryList}`}>
              {list.map(({ name, slug }: any) => (
                <li key={slug} className={styles.categoryListItem}>
                  <Link
                    style={
                      slugPath === slug
                        ? { color: "var(--main-blue)" }
                        : { color: "black" }
                    }
                    href={`/catalog/category/${slug}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
