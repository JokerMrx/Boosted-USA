import { useState, useEffect, Children, cloneElement } from "react";

import ArrowLeft from "../../assets/Arrow-left.svg";
import ArrowRight from "../../assets/Arrow-right.svg";

import styles from "./Carousel.module.scss";

const PAGE_WIDTH = 1440;

const Carousel = ({ children, height = "100%", width = "100%" }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: height,
            minWidth: width,
            maxWidth: width,
          },
        });
      })
    );
  }, []);

  const handleArrowLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH / 2;
      return Math.min(newOffset, 0);
    });
  };

  const handleArrowRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH / 2;
      const maxOffset = -(PAGE_WIDTH * pages.length);
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowLeft} onClick={handleArrowLeft}>
        <img src={ArrowLeft} alt="arrow-left" />
      </div>
      <div className={styles.window}>
        <div
          className={styles.pagesContainer}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <div className={styles.arrowRight} onClick={handleArrowRight}>
        <img src={ArrowRight} alt="arrow-left" />
      </div>{" "}
    </div>
  );
};

export default Carousel;
