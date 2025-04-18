import { useState, useRef, useEffect } from "react";
import classes from "./galleryBar.module.css";

interface ImageData {
  id: number;
  name: string;
  width: number;
  height: number;
}

interface Position {
  left: number;
  top: number;
}

const GUTTER = 20; // 新增间距常量

const images = [
  {
    "id": 1,
    "name": "image_1.png",
    "width": 734,
    "height": 467
  },
  {
    "id": 2,
    "name": "image_10.png",
    "width": 1016,
    "height": 604
  },
  {
    "id": 3,
    "name": "image_11.png",
    "width": 572,
    "height": 552
  },
  {
    "id": 4,
    "name": "image_12.png",
    "width": 592,
    "height": 602
  },
  {
    "id": 5,
    "name": "image_13.png",
    "width": 720,
    "height": 640
  },
  {
    "id": 7,
    "name": "image_14.png",
    "width": 532,
    "height": 530
  },
  {
    "id": 6,
    "name": "image_15.png",
    "width": 752,
    "height": 646
  },
  {
    "id": 8,
    "name": "image_16.png",
    "width": 784,
    "height": 544
  },
  {
    "id": 9,
    "name": "image_17.png",
    "width": 918,
    "height": 1026
  },
  {
    "id": 10,
    "name": "image_18.png",
    "width": 502,
    "height": 556
  },
  {
    "id": 13,
    "name": "image_19.png",
    "width": 514,
    "height": 496
  },
  {
    "id": 11,
    "name": "image_2.png",
    "width": 1262,
    "height": 1270
  },
  {
    "id": 12,
    "name": "image_20.png",
    "width": 434,
    "height": 478
  },
  {
    "id": 14,
    "name": "image_21.png",
    "width": 684,
    "height": 570
  },
  {
    "id": 15,
    "name": "image_22.png",
    "width": 1056,
    "height": 1060
  },
  {
    "id": 17,
    "name": "image_23.png",
    "width": 682,
    "height": 480
  },
  {
    "id": 16,
    "name": "image_24.png",
    "width": 556,
    "height": 582
  },
  {
    "id": 18,
    "name": "image_25.png",
    "width": 966,
    "height": 744
  },
  {
    "id": 19,
    "name": "image_26.png",
    "width": 1668,
    "height": 1316
  },
  {
    "id": 20,
    "name": "image_27.png",
    "width": 548,
    "height": 456
  },
  {
    "id": 21,
    "name": "image_28.png",
    "width": 832,
    "height": 684
  },
  {
    "id": 22,
    "name": "image_29.png",
    "width": 710,
    "height": 644
  },
  {
    "id": 23,
    "name": "image_3.png",
    "width": 1112,
    "height": 894
  },
  {
    "id": 24,
    "name": "image_30.png",
    "width": 508,
    "height": 470
  },
  {
    "id": 25,
    "name": "image_31.png",
    "width": 510,
    "height": 510
  },
  {
    "id": 26,
    "name": "image_32.png",
    "width": 550,
    "height": 560
  },
  {
    "id": 29,
    "name": "image_33.png",
    "width": 1154,
    "height": 1212
  },
  {
    "id": 27,
    "name": "image_34.png",
    "width": 306,
    "height": 362
  },
  {
    "id": 31,
    "name": "image_35.png",
    "width": 852,
    "height": 684
  },
  {
    "id": 28,
    "name": "image_36.png",
    "width": 272,
    "height": 364
  },
  {
    "id": 30,
    "name": "image_37.png",
    "width": 682,
    "height": 674
  },
  {
    "id": 32,
    "name": "image_38.png",
    "width": 860,
    "height": 872
  },
  {
    "id": 34,
    "name": "image_39.png",
    "width": 866,
    "height": 736
  },
  {
    "id": 35,
    "name": "image_4.png",
    "width": 812,
    "height": 650
  },
  {
    "id": 33,
    "name": "image_40.png",
    "width": 1334,
    "height": 1248
  },
  {
    "id": 36,
    "name": "image_41.png",
    "width": 696,
    "height": 682
  },
  {
    "id": 37,
    "name": "image_42.png",
    "width": 316,
    "height": 364
  },
  {
    "id": 38,
    "name": "image_43.png",
    "width": 660,
    "height": 624
  },
  {
    "id": 39,
    "name": "image_44.png",
    "width": 350,
    "height": 358
  },
  {
    "id": 40,
    "name": "image_45.png",
    "width": 342,
    "height": 348
  },
  {
    "id": 41,
    "name": "image_46.png",
    "width": 356,
    "height": 354
  },
  {
    "id": 44,
    "name": "image_47.png",
    "width": 742,
    "height": 636
  },
  {
    "id": 42,
    "name": "image_48.png",
    "width": 266,
    "height": 362
  },
  {
    "id": 43,
    "name": "image_49.png",
    "width": 382,
    "height": 332
  },
  {
    "id": 45,
    "name": "image_5.png",
    "width": 428,
    "height": 350
  },
  {
    "id": 47,
    "name": "image_50.png",
    "width": 522,
    "height": 490
  },
  {
    "id": 46,
    "name": "image_51.png",
    "width": 210,
    "height": 179
  },
  {
    "id": 48,
    "name": "image_52.png",
    "width": 239,
    "height": 311
  },
  {
    "id": 49,
    "name": "image_6.png",
    "width": 378,
    "height": 318
  },
  {
    "id": 52,
    "name": "image_7.png",
    "width": 916,
    "height": 908
  },
  {
    "id": 51,
    "name": "image_8.png",
    "width": 506,
    "height": 514
  },
  {
    "id": 50,
    "name": "image_9.png",
    "width": 562,
    "height": 490
  }
];
export default function GalleryBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeTimer = useRef<NodeJS.Timeout>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [columns, setColumns] = useState(4); // 默认列数
  const [positions, setPositions] = useState<Position[]>([]);

  const columnWidth = (containerWidth - (columns - 1) * GUTTER) / columns; // 计算列宽时考虑间距
  // 计算布局的核心方法
  const calculateLayout = (images: ImageData[]) => {
    const columnHeights = new Array(columns).fill(0);

    const newPositions = images.map((img) => {
      // 根据图片宽高比计算实际显示高度
      const displayHeight = (img.height / img.width) * columnWidth;

      // 找到当前最短列
      const shortestCol = columnHeights.indexOf(Math.min(...columnHeights));

      // 计算位置时添加水平间距
      const position = {
        left: shortestCol * (columnWidth + GUTTER),
        top: columnHeights[shortestCol],
      };

      // 更新列高度
      columnHeights[shortestCol] += displayHeight + GUTTER;

      return position;
    });

    setPositions(newPositions);
  };

  // 在现有useEffect中添加布局计算
  useEffect(() => {
    if (containerWidth > 0 && images.length > 0) {
      calculateLayout(images);
    }
  }, [containerWidth, columns, images]);

  useEffect(() => {
    const updateWidth = () => {
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(() => {
        const width = containerRef.current?.offsetWidth || 0;
        setContainerWidth(width);
        // 根据宽度动态调整列数
        setColumns(Math.max(2, Math.floor(width / 300))); // 每列最小宽度300px
      }, 200);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth(); // 初始化

    return () => {
      window.removeEventListener("resize", updateWidth);
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={classes.waterfallContainer}>
      {images.map((img, index) => (
        <img
          key={img.id}
          src={`/images/${img.name}`}
          style={{
            width: `${columnWidth}px`,
            position: "absolute",
            ...positions[index],
          }}
        // onLoad={() => {
        //   // 添加图片加载完成后的重排
        //   if (containerRef.current) {
        //     setContainerWidth(containerRef.current.offsetWidth);
        //   }
        // }}
        />
      ))}
    </div>
  );
}
