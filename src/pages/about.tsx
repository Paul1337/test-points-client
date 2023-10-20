import { Item } from "@/components/Item/Item";

import cls from "./about.module.scss";
import axios from "axios";
import { resetGame } from "@/shared/http";
import { defaultMatrix } from "../shared/consts.ts/data";
import { useMainStore } from "@/shared/zustand/useMainStore";
import { useEffect, useCallback } from "react";

interface MyType {
  id: number;
  value: number;
}

export const getServerSideProps = () => {
  return { props: {} };
};

const About = () => {
  // const matrix: number[][] = Array.from({ length: 20 }, (_, rowIndex) =>
  //   Array.from({ length: 20 }, (_, colIndex) => rowIndex * 20 + colIndex + 1)
  // );

  const { matrix, resetMatrix, isBlocked } = useMainStore();

  const initial = useCallback(async () => {
    await resetGame();
    resetMatrix();
  }, [resetMatrix]);

  useEffect(() => {
    initial();
  }, [initial]);

  return (
    <>
      <div
        style={{
          display: "flex",
          left: "50%",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          transform: "translateX(-50%) translateY(-50%)",
        }}
        // className={cls.field}
      >
        <div>{isBlocked.toString()}</div>
        {matrix.map((matrixItem, firstIndex) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // border: "3px solid yellow",
            }}
            key={firstIndex}
          >
            {matrixItem.map((item, secondIndex) => (
              <Item
                point={item}
                coordinate={{ x: secondIndex, y: firstIndex }}
                index={firstIndex === 19 || secondIndex === 19}
                key={firstIndex * matrix.length + secondIndex}
                // key={item}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
