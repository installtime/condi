import styles from "./catalogList.module.css";
import Image from "next/image";

const CatalogList = () => {
  return (
    <section className={`mt ${styles.catalogContainer}`}>
      <div className={`container ${styles.catalog}`}>
        <h2 className={`title-medium blue`}>Каталог</h2>
        <ul className={`${styles.catalogList}`}>
          <li className={`${styles.catalogItem}`}>
            <h3 className={`blue`}>Кондиционеры для дома</h3>
            <p className={`blue ${styles.catalogCardDescription}`}>
              Компрессор, рассчитанный на температуру конденсации 60 °С с
              расширенным диапазоном
            </p>
            <div className={styles.catalogItemImageContainer}>
              <Image
                className={styles.catalogItemImage}
                alt=""
                width={1000}
                height={1000}
                src={
                  "http://localhost:1337/uploads/6557a55e2f431d497f7c3b06_64ba8db44c6453a8bf4f689b_Markets20_Residential402x_1_b8a619ba07.svg"
                }
              />
            </div>
          </li>
          <li className={`${styles.catalogItem}`}>
            <h3 className={`blue`}>Кондиционеры для дома</h3>
            <p className={`blue ${styles.catalogCardDescription}`}>
              Компрессор, рассчитанный на температуру конденсации 60 °С с
              расширенным диапазоном
            </p>
            <div className={styles.catalogItemImageContainer}>
              <Image
                className={styles.catalogItemImage}
                alt=""
                width={1000}
                height={1000}
                src={
                  "http://localhost:1337/uploads/6557a55e2f431d497f7c3b06_64ba8db44c6453a8bf4f689b_Markets20_Residential402x_1_b8a619ba07.svg"
                }
              />
            </div>
          </li>
          <li className={`${styles.catalogItem}`}>
            <h3 className={`blue`}>Кондиционеры для дома</h3>
            <p className={`blue ${styles.catalogCardDescription}`}>
              Компрессор, рассчитанный на температуру конденсации 60 °С с
              расширенным диапазоном
            </p>
            <div className={styles.catalogItemImageContainer}>
              <Image
                className={styles.catalogItemImage}
                alt=""
                width={1000}
                height={1000}
                src={
                  "http://localhost:1337/uploads/6557a55e2f431d497f7c3b06_64ba8db44c6453a8bf4f689b_Markets20_Residential402x_1_b8a619ba07.svg"
                }
              />
            </div>
          </li>
          <li className={`${styles.catalogItem}`}>
            <h3 className={`blue`}>Кондиционеры для дома</h3>
            <p className={`blue ${styles.catalogCardDescription}`}>
              Компрессор, рассчитанный на температуру конденсации 60 °С с
              расширенным диапазоном
            </p>
            <div className={styles.catalogItemImageContainer}>
              <Image
                className={styles.catalogItemImage}
                alt=""
                width={1000}
                height={1000}
                src={
                  "http://localhost:1337/uploads/6557a55e2f431d497f7c3b06_64ba8db44c6453a8bf4f689b_Markets20_Residential402x_1_b8a619ba07.svg"
                }
              />
            </div>
          </li>
          <li className={`${styles.catalogItem}`}>
            <h3 className={`blue`}>Кондиционеры для дома</h3>
            <p className={`blue ${styles.catalogCardDescription}`}>
              Компрессор, рассчитанный на температуру конденсации 60 °С с
              расширенным диапазоном
            </p>
            <div className={styles.catalogItemImageContainer}>
              <Image
                className={styles.catalogItemImage}
                alt=""
                width={1000}
                height={1000}
                src={
                  "http://localhost:1337/uploads/6557a55e2f431d497f7c3b06_64ba8db44c6453a8bf4f689b_Markets20_Residential402x_1_b8a619ba07.svg"
                }
              />
            </div>
          </li>
          <li className={`${styles.catalogItem}`}>
            <h3 className={`blue`}>Кондиционеры для дома</h3>
            <p className={`blue ${styles.catalogCardDescription}`}>
              Компрессор, рассчитанный на температуру конденсации 60 °С с
              расширенным диапазоном
            </p>
            <div className={styles.catalogItemImageContainer}>
              <Image
                className={styles.catalogItemImage}
                alt=""
                width={1000}
                height={1000}
                src={
                  "http://localhost:1337/uploads/6557a55e2f431d497f7c3b06_64ba8db44c6453a8bf4f689b_Markets20_Residential402x_1_b8a619ba07.svg"
                }
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CatalogList;
