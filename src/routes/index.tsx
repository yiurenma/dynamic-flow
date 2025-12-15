import { createFileRoute } from "@tanstack/react-router";
import { Card, Col, Row, Table, Tag, Progress, List, Avatar, Typography } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  RiseOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const { Title, Text } = Typography;

export const Route = createFileRoute("/")({
  component: Dashboard,
});

// 统计数据
const statsData = [
  {
    title: "总用户数",
    value: 12580,
    prefix: <UserOutlined />,
    suffix: "人",
    trend: 12.5,
    trendUp: true,
    className: "stat-card-primary",
  },
  {
    title: "订单数量",
    value: 8846,
    prefix: <ShoppingCartOutlined />,
    suffix: "单",
    trend: 8.2,
    trendUp: true,
    className: "stat-card-success",
  },
  {
    title: "销售额",
    value: 568920,
    prefix: <DollarOutlined />,
    suffix: "元",
    trend: 5.3,
    trendUp: false,
    className: "stat-card-warning",
  },
  {
    title: "转化率",
    value: 68.5,
    prefix: <RiseOutlined />,
    suffix: "%",
    trend: 2.1,
    trendUp: true,
    className: "stat-card-info",
  },
];

// 图表数据
const chartData = [
  { name: "1月", uv: 4000, pv: 2400 },
  { name: "2月", uv: 3000, pv: 1398 },
  { name: "3月", uv: 2000, pv: 9800 },
  { name: "4月", uv: 2780, pv: 3908 },
  { name: "5月", uv: 1890, pv: 4800 },
  { name: "6月", uv: 2390, pv: 3800 },
  { name: "7月", uv: 3490, pv: 4300 },
];

// 饼图数据
const pieData = [
  { name: "直接访问", value: 335, color: "#1677ff" },
  { name: "邮件营销", value: 310, color: "#52c41a" },
  { name: "联盟广告", value: 234, color: "#faad14" },
  { name: "视频广告", value: 135, color: "#f5222d" },
  { name: "搜索引擎", value: 548, color: "#722ed1" },
];

// 最近订单
const recentOrders = [
  {
    key: "1",
    orderId: "ORD-001",
    customer: "张三",
    product: "iPhone 15 Pro",
    amount: 8999,
    status: "completed",
    date: "2024-12-15",
  },
  {
    key: "2",
    orderId: "ORD-002",
    customer: "李四",
    product: "MacBook Pro 14",
    amount: 14999,
    status: "pending",
    date: "2024-12-14",
  },
  {
    key: "3",
    orderId: "ORD-003",
    customer: "王五",
    product: "AirPods Pro",
    amount: 1899,
    status: "shipping",
    date: "2024-12-14",
  },
  {
    key: "4",
    orderId: "ORD-004",
    customer: "赵六",
    product: "iPad Air",
    amount: 4799,
    status: "completed",
    date: "2024-12-13",
  },
  {
    key: "5",
    orderId: "ORD-005",
    customer: "钱七",
    product: "Apple Watch",
    amount: 2999,
    status: "cancelled",
    date: "2024-12-13",
  },
];

// 活跃用户
const activeUsers = [
  { name: "张三", avatar: null, activity: "购买了 iPhone 15 Pro", time: "5分钟前" },
  { name: "李四", avatar: null, activity: "发表了商品评价", time: "15分钟前" },
  { name: "王五", avatar: null, activity: "加入购物车 3 件商品", time: "30分钟前" },
  { name: "赵六", avatar: null, activity: "完成了实名认证", time: "1小时前" },
  { name: "钱七", avatar: null, activity: "申请售后服务", time: "2小时前" },
];

const orderColumns = [
  {
    title: "订单号",
    dataIndex: "orderId",
    key: "orderId",
    render: (text: string) => <a className="text-blue-600">{text}</a>,
  },
  {
    title: "客户",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "商品",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "金额",
    dataIndex: "amount",
    key: "amount",
    render: (amount: number) => `¥${amount.toLocaleString()}`,
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      const statusMap: Record<string, { color: string; text: string }> = {
        completed: { color: "success", text: "已完成" },
        pending: { color: "warning", text: "待处理" },
        shipping: { color: "processing", text: "配送中" },
        cancelled: { color: "error", text: "已取消" },
      };
      const { color, text } = statusMap[status] || { color: "default", text: status };
      return <Tag color={color}>{text}</Tag>;
    },
  },
  {
    title: "日期",
    dataIndex: "date",
    key: "date",
  },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <Title level={4} className="!mb-1">
          仪表盘
        </Title>
        <Text type="secondary">欢迎回来！以下是今日数据概览</Text>
      </div>

      {/* 统计卡片 */}
      <Row gutter={[16, 16]}>
        {statsData.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card className={`${stat.className} text-white border-none`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/80 text-sm mb-1">{stat.title}</div>
                  <div className="text-3xl font-bold">
                    {stat.value.toLocaleString()}
                    <span className="text-base font-normal ml-1">{stat.suffix}</span>
                  </div>
                </div>
                <div className="text-4xl opacity-50">{stat.prefix}</div>
              </div>
              <div className="mt-3 flex items-center text-sm text-white/80">
                {stat.trendUp ? (
                  <ArrowUpOutlined className="mr-1" />
                ) : (
                  <ArrowDownOutlined className="mr-1" />
                )}
                <span>较昨日 {stat.trendUp ? "+" : "-"}{stat.trend}%</span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 图表区域 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card title="访问趋势" className="h-full">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#1677ff"
                  fill="#1677ff"
                  fillOpacity={0.6}
                  name="访问量"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#52c41a"
                  fill="#52c41a"
                  fillOpacity={0.6}
                  name="浏览量"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="流量来源" className="h-full">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-1 text-xs">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      {/* 数据表格和活动列表 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card title="最近订单">
            <Table
              columns={orderColumns}
              dataSource={recentOrders}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="活跃用户">
            <List
              itemLayout="horizontal"
              dataSource={activeUsers}
              renderItem={(item) => (
                <List.Item className="!px-0">
                  <List.Item.Meta
                    avatar={
                      <Avatar icon={<UserOutlined />} className="bg-blue-500" />
                    }
                    title={<span className="text-sm">{item.name}</span>}
                    description={
                      <div className="text-xs">
                        <div className="text-gray-600">{item.activity}</div>
                        <div className="text-gray-400">{item.time}</div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* 任务进度 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="任务进度">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">用户增长目标</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress percent={85} strokeColor="#1677ff" showInfo={false} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">销售额目标</span>
                  <span className="text-sm font-medium">72%</span>
                </div>
                <Progress percent={72} strokeColor="#52c41a" showInfo={false} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">订单完成率</span>
                  <span className="text-sm font-medium">93%</span>
                </div>
                <Progress percent={93} strokeColor="#722ed1" showInfo={false} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">客户满意度</span>
                  <span className="text-sm font-medium">68%</span>
                </div>
                <Progress percent={68} strokeColor="#faad14" showInfo={false} />
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="系统公告">
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div className="font-medium text-blue-800 mb-1">系统升级通知</div>
                <div className="text-sm text-blue-600">
                  系统将于 2024年12月20日 凌晨2:00-4:00 进行维护升级，届时服务将暂停。
                </div>
                <div className="text-xs text-blue-400 mt-2">2024-12-15</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <div className="font-medium text-green-800 mb-1">新功能上线</div>
                <div className="text-sm text-green-600">
                  报表导出功能已上线，支持 Excel、PDF 格式导出。
                </div>
                <div className="text-xs text-green-400 mt-2">2024-12-14</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                <div className="font-medium text-orange-800 mb-1">安全提醒</div>
                <div className="text-sm text-orange-600">
                  请定期修改登录密码，确保账户安全。
                </div>
                <div className="text-xs text-orange-400 mt-2">2024-12-10</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
