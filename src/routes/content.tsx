import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  Table,
  Button,
  Space,
  Tag,
  Input,
  Select,
  Modal,
  Form,
  message,
  Popconfirm,
  Typography,
  Row,
  Col,
  Tooltip,
  Image,
  Tabs,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  FileTextOutlined,
  PictureOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

export const Route = createFileRoute("/content")({
  component: ContentPage,
});

interface Article {
  id: string;
  title: string;
  category: string;
  status: "published" | "draft" | "reviewing";
  author: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  cover: string;
}

// 模拟文章数据
const mockArticles: Article[] = [
  {
    id: "1",
    title: "React 19 新特性详解",
    category: "技术",
    status: "published",
    author: "张三",
    views: 12580,
    createdAt: "2024-12-10",
    updatedAt: "2024-12-14",
    cover: "https://picsum.photos/200/120?random=1",
  },
  {
    id: "2",
    title: "2024年前端发展趋势",
    category: "技术",
    status: "published",
    author: "李四",
    views: 8920,
    createdAt: "2024-12-08",
    updatedAt: "2024-12-12",
    cover: "https://picsum.photos/200/120?random=2",
  },
  {
    id: "3",
    title: "产品设计最佳实践",
    category: "设计",
    status: "draft",
    author: "王五",
    views: 0,
    createdAt: "2024-12-12",
    updatedAt: "2024-12-12",
    cover: "https://picsum.photos/200/120?random=3",
  },
  {
    id: "4",
    title: "用户体验优化指南",
    category: "设计",
    status: "reviewing",
    author: "赵六",
    views: 0,
    createdAt: "2024-12-11",
    updatedAt: "2024-12-13",
    cover: "https://picsum.photos/200/120?random=4",
  },
  {
    id: "5",
    title: "TypeScript 高级技巧",
    category: "技术",
    status: "published",
    author: "钱七",
    views: 6540,
    createdAt: "2024-12-05",
    updatedAt: "2024-12-10",
    cover: "https://picsum.photos/200/120?random=5",
  },
  {
    id: "6",
    title: "市场营销策略分析",
    category: "运营",
    status: "published",
    author: "孙八",
    views: 4230,
    createdAt: "2024-12-03",
    updatedAt: "2024-12-08",
    cover: "https://picsum.photos/200/120?random=6",
  },
];

function ContentPage() {
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [form] = Form.useForm();

  const handleAdd = () => {
    setEditingArticle(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    form.setFieldsValue(article);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setArticles(articles.filter((a) => a.id !== id));
    message.success("删除成功");
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      if (editingArticle) {
        setArticles(
          articles.map((a) =>
            a.id === editingArticle.id
              ? { ...a, ...values, updatedAt: new Date().toISOString().split("T")[0] }
              : a
          )
        );
        message.success("更新成功");
      } else {
        const newArticle: Article = {
          id: String(Date.now()),
          ...values,
          views: 0,
          createdAt: new Date().toISOString().split("T")[0],
          updatedAt: new Date().toISOString().split("T")[0],
          cover: `https://picsum.photos/200/120?random=${Date.now()}`,
        };
        setArticles([newArticle, ...articles]);
        message.success("添加成功");
      }
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      !searchText ||
      article.title.toLowerCase().includes(searchText.toLowerCase()) ||
      article.author.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = !statusFilter || article.status === statusFilter;
    const matchesCategory = !categoryFilter || article.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const columns = [
    {
      title: "封面",
      dataIndex: "cover",
      key: "cover",
      width: 100,
      render: (cover: string) => (
        <Image
          src={cover}
          width={80}
          height={48}
          className="rounded object-cover"
          fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAABkCAYAAADcsCARAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGASURBVHhe7dIxAQAADMOg+TfdicgLGrhBIBCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQC0Q9/uAH6sT4dYQAAAABJRU5ErkJggg=="
        />
      ),
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      render: (text: string) => (
        <Paragraph ellipsis={{ rows: 1 }} className="!mb-0 font-medium">
          {text}
        </Paragraph>
      ),
    },
    {
      title: "分类",
      dataIndex: "category",
      key: "category",
      width: 80,
      render: (category: string) => {
        const colorMap: Record<string, string> = {
          技术: "blue",
          设计: "purple",
          运营: "orange",
          产品: "green",
        };
        return <Tag color={colorMap[category] || "default"}>{category}</Tag>;
      },
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
      width: 80,
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (status: string) => {
        const statusMap: Record<string, { color: string; text: string }> = {
          published: { color: "success", text: "已发布" },
          draft: { color: "default", text: "草稿" },
          reviewing: { color: "processing", text: "审核中" },
        };
        const { color, text } = statusMap[status] || { color: "default", text: status };
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "浏览量",
      dataIndex: "views",
      key: "views",
      width: 80,
      render: (views: number) => views.toLocaleString(),
    },
    {
      title: "更新时间",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 110,
    },
    {
      title: "操作",
      key: "action",
      width: 120,
      render: (_: unknown, record: Article) => (
        <Space size="small">
          <Tooltip title="预览">
            <Button type="text" icon={<EyeOutlined />} />
          </Tooltip>
          <Tooltip title="编辑">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Popconfirm
            title="确定要删除这篇文章吗？"
            onConfirm={() => handleDelete(record.id)}
            okText="确定"
            cancelText="取消"
          >
            <Tooltip title="删除">
              <Button type="text" danger icon={<DeleteOutlined />} />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const tabItems = [
    {
      key: "article",
      label: (
        <span>
          <FileTextOutlined />
          文章
        </span>
      ),
      children: (
        <>
          <div className="mb-4">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8}>
                <Input
                  placeholder="搜索标题或作者"
                  prefix={<SearchOutlined className="text-gray-400" />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  allowClear
                />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Select
                  placeholder="状态"
                  className="w-full"
                  allowClear
                  value={statusFilter}
                  onChange={setStatusFilter}
                  options={[
                    { value: "published", label: "已发布" },
                    { value: "draft", label: "草稿" },
                    { value: "reviewing", label: "审核中" },
                  ]}
                />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Select
                  placeholder="分类"
                  className="w-full"
                  allowClear
                  value={categoryFilter}
                  onChange={setCategoryFilter}
                  options={[
                    { value: "技术", label: "技术" },
                    { value: "设计", label: "设计" },
                    { value: "运营", label: "运营" },
                    { value: "产品", label: "产品" },
                  ]}
                />
              </Col>
            </Row>
          </div>
          <Table
            columns={columns}
            dataSource={filteredArticles}
            rowKey="id"
            pagination={{
              total: filteredArticles.length,
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total) => `共 ${total} 条记录`,
            }}
          />
        </>
      ),
    },
    {
      key: "image",
      label: (
        <span>
          <PictureOutlined />
          图片
        </span>
      ),
      children: (
        <div className="text-center py-12 text-gray-500">
          <PictureOutlined className="text-5xl mb-4" />
          <div>图片管理功能开发中...</div>
        </div>
      ),
    },
    {
      key: "video",
      label: (
        <span>
          <VideoCameraOutlined />
          视频
        </span>
      ),
      children: (
        <div className="text-center py-12 text-gray-500">
          <VideoCameraOutlined className="text-5xl mb-4" />
          <div>视频管理功能开发中...</div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Title level={4} className="!mb-1">
            内容管理
          </Title>
          <Text type="secondary">管理文章、图片和视频内容</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          新建内容
        </Button>
      </div>

      <Card>
        <Tabs items={tabItems} />
      </Card>

      <Modal
        title={editingArticle ? "编辑文章" : "新建文章"}
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={() => setIsModalOpen(false)}
        okText="确定"
        cancelText="取消"
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          className="mt-4"
          initialValues={{ status: "draft", category: "技术" }}
        >
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: "请输入标题" }]}
          >
            <Input placeholder="请输入文章标题" />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="category"
                label="分类"
                rules={[{ required: true, message: "请选择分类" }]}
              >
                <Select
                  placeholder="请选择分类"
                  options={[
                    { value: "技术", label: "技术" },
                    { value: "设计", label: "设计" },
                    { value: "运营", label: "运营" },
                    { value: "产品", label: "产品" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="author"
                label="作者"
                rules={[{ required: true, message: "请输入作者" }]}
              >
                <Input placeholder="请输入作者姓名" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="status"
            label="状态"
            rules={[{ required: true, message: "请选择状态" }]}
          >
            <Select
              placeholder="请选择状态"
              options={[
                { value: "draft", label: "草稿" },
                { value: "reviewing", label: "提交审核" },
                { value: "published", label: "立即发布" },
              ]}
            />
          </Form.Item>
          <Form.Item name="content" label="内容">
            <TextArea rows={6} placeholder="请输入文章内容..." />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
