import { createFileRoute } from "@tanstack/react-router";
import { Card, DatePicker, Select, Space, Table, Typography, Row, Col, Statistic } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

export const Route = createFileRoute("/reports")({
  component: ReportsPage,
});

// 销售数据
const salesData = [
  { month: "1月", sales: 4500, orders: 150, returns: 12 },
  { month: "2月", sales: 3800, orders: 128, returns: 8 },
  { month: "3月", sales: 5200, orders: 175, returns: 15 },
  { month: "4月", sales: 4900, orders: 165, returns: 10 },
  { month: "5月", sales: 6300, orders: 210, returns: 18 },
  { month: "6月", sales: 5800, orders: 195, returns: 14 },
  { month: "7月", sales: 7200, orders: 240, returns: 20 },
  { month: "8月", sales: 6500, orders: 218, returns: 16 },
  { month: "9月", sales: 5900, orders: 198, returns: 13 },
  { month: "10月", sales: 6800, orders: 228, returns: 17 },
  { month: "11月", sales: 8500, orders: 285, returns: 22 },
  { month: "12月", sales: 9200, orders: 310, returns: 25 },
];

// 用户增长数据
const userGrowthData = [
  { week: "第1周", newUsers: 120, activeUsers: 850 },
  { week: "第2周", newUsers: 150, activeUsers: 920 },
  { week: "第3周", newUsers: 180, activeUsers: 1050 },
  { week: "第4周", newUsers: 200, activeUsers: 1180 },
  { week: "第5周", newUsers: 165, activeUsers: 1280 },
  { week: "第6周", newUsers: 220, activeUsers: 1450 },
  { week: "第7周", newUsers: 190, activeUsers: 1580 },
  { week: "第8周", newUsers: 250, activeUsers: 1750 },
];

// 产品销售排行
const productRanking = [
  { key: "1", rank: 1, product: "iPhone 15 Pro", category: "手机", sales: 1580, amount: 14212000, growth: 25.5 },
  { key: "2", rank: 2, product: "MacBook Pro 14", category: "电脑", sales: 890, amount: 13350000, growth: 18.2 },
  { key: "3", rank: 3, product: "iPad Pro 12.9", category: "平板", sales: 1120, amount: 10080000, growth: 12.8 },
  { key: "4", rank: 4, product: "AirPods Pro", category: "配件", sales: 3580, amount: 6801000, growth: 35.6 },
  { key: "5", rank: 5, product: "Apple Watch S9", category: "穿戴", sales: 1850, amount: 5550000, growth: -5.2 },
  { key: "6", rank: 6, product: "HomePod mini", category: "智能家居", sales: 2100, amount: 1680000, growth: 8.9 },
];

const productColumns = [
  {
    title: "排名",
    dataIndex: "rank",
    key: "rank",
    width: 60,
    render: (rank: number) => {
      const colors = ["#f5222d", "#fa8c16", "#fadb14"];
      return (
        <span
          className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold"
          style={{ backgroundColor: colors[rank - 1] || "#d9d9d9" }}
        >
          {rank}
        </span>
      );
    },
  },
  {
    title: "产品名称",
    dataIndex: "product",
    key: "product",
    render: (text: string) => <span className="font-medium">{text}</span>,
  },
  {
    title: "分类",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "销量",
    dataIndex: "sales",
    key: "sales",
    render: (sales: number) => sales.toLocaleString(),
  },
  {
    title: "销售额",
    dataIndex: "amount",
    key: "amount",
    render: (amount: number) => `¥${(amount / 10000).toFixed(1)}万`,
  },
  {
    title: "同比增长",
    dataIndex: "growth",
    key: "growth",
    render: (growth: number) => (
      <span className={growth >= 0 ? "text-green-600" : "text-red-600"}>
        {growth >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        {Math.abs(growth)}%
      </span>
    ),
  },
];

function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <Title level={4} className="!mb-1">
            报表统计
          </Title>
          <Text type="secondary">查看系统数据分析报表</Text>
        </div>
        <Space wrap>
          <Select
            defaultValue="year"
            style={{ width: 120 }}
            options={[
              { value: "week", label: "本周" },
              { value: "month", label: "本月" },
              { value: "quarter", label: "本季度" },
              { value: "year", label: "本年" },
            ]}
          />
          <RangePicker />
        </Space>
      </div>

      {/* 统计卡片 */}
      <Row gutter={[16, 16]}>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="总销售额"
              value={7523}
              precision={1}
              suffix="万元"
              valueStyle={{ color: "#1677ff" }}
            />
            <div className="text-xs text-green-600 mt-2">
              <ArrowUpOutlined /> 同比增长 12.5%
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="总订单数"
              value={25680}
              suffix="单"
              valueStyle={{ color: "#52c41a" }}
            />
            <div className="text-xs text-green-600 mt-2">
              <ArrowUpOutlined /> 同比增长 8.2%
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="客单价"
              value={293}
              suffix="元"
              valueStyle={{ color: "#722ed1" }}
            />
            <div className="text-xs text-red-600 mt-2">
              <ArrowDownOutlined /> 同比下降 2.1%
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="退货率"
              value={1.8}
              precision={1}
              suffix="%"
              valueStyle={{ color: "#faad14" }}
            />
            <div className="text-xs text-green-600 mt-2">
              <ArrowDownOutlined /> 同比下降 0.5%
            </div>
          </Card>
        </Col>
      </Row>

      {/* 图表 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="月度销售趋势">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" name="销售额(百元)" fill="#1677ff" radius={[4, 4, 0, 0]} />
                <Bar dataKey="orders" name="订单数" fill="#52c41a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="用户增长趋势">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="newUsers"
                  name="新增用户"
                  stroke="#1677ff"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="activeUsers"
                  name="活跃用户"
                  stroke="#52c41a"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* 产品排行 */}
      <Card title="产品销售排行">
        <Table
          columns={productColumns}
          dataSource={productRanking}
          pagination={false}
        />
      </Card>
    </div>
  );
}
