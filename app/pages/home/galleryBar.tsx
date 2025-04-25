import { useState, useRef, useEffect, useCallback } from "react";
import { Modal } from 'antd';
import GalleryItem from './components/galleryItem';
import GalleryModal from './components/galleryModal';
import classes from "./galleryBar.module.css";
import galleryData from '../../../public/data.json'
import type { GalleryData, Position } from '../../types/gallery';

const GUTTER = 20; // 新增间距常量

export default function GalleryBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeTimer = useRef<NodeJS.Timeout>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [columns, setColumns] = useState(4); // 默认列数
  const [positions, setPositions] = useState<Position[]>([]);

  const columnWidth = (containerWidth - (columns - 1) * GUTTER) / columns; // 计算列宽时考虑间距
  // 计算布局的核心方法
  const calculateLayout = (images: GalleryData[]) => {
    const columnHeights = new Array(columns).fill(0);

    const newPositions = images.map((img) => {
      // 根据图片宽高比计算实际显示高度
      const displayHeight = (img.avatar.height / img.avatar.width) * columnWidth;

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
    if (containerWidth > 0 && galleryData.length > 0) {
      calculateLayout(galleryData);
    }
  }, [containerWidth, columns, galleryData]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryData | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleItemClick = useCallback((item: GalleryData) => {
    setSelectedItem(item);
    showModal();
  }, [])


  return (
    <div ref={containerRef} className={classes.waterfallContainer}>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={null} // 隐藏标题
        footer={null} // 隐藏确认按钮
        getContainer={false}
        styles={{content:{width:'648px'}}}>
        {selectedItem && <GalleryModal data={selectedItem} />}
      </Modal>
      {galleryData.map((item, index) => (
        <GalleryItem
          key={item.id}
          data={item}
          width={columnWidth}
          index={index}
          positions={positions}
          onClick={handleItemClick}
        />
      ))}
    </div>
  );
}
