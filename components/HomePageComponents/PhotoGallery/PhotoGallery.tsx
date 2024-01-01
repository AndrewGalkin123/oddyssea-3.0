import {Row, Col} from 'antd'

const PhotoGallery: React.FC = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={6} />
      <Col span={6} />
      <Col span={6} />
      <Col span={6} />

      <Col span={6} />
      <Col span={6} />
      <Col span={6} />
      <Col span={6} />

      <Col span={6} />
      <Col span={6} />
      <Col span={6} />
      <Col span={6} />
    </Row>
  );
};

export { PhotoGallery };
