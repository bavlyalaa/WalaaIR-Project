// import { DownOutlined } from "@ant-design/icons";
// import { Dropdown, Space, Typography } from "antd";
// import { useNavigate } from "react-router-dom";

// const InvestorRelationsDrop = () => {
// //   const navigate = useNavigate();

//   const items = [
//     "Overview",
//     "Profile",
//     "Board of Directors",
//     "Executive Management",
//     "Share Performance",
//     "Financial Performance",
//     "Investment Presentation",
//     "Announcements",
//     "Corporate Actions",
//     "Major Shareholders",
//     "Business Segments",
//     "Mergers & Acquisitions",
//     "Contact IR",
//   ];

//   const gridMenu = (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(fr)",
//         gap: "12px",
//         padding: "16px",
//         width: "100vw",    
//         boxSizing: "border-box",
//       }}
//     >
//       {items.map((label, index) => (
//         <Typography.Link
//           key={index}
//           onClick={() => navigate(`/investor/${label.toLowerCase().replace(/\s+/g, '-')}`)}
//           style={{
//             display: "block",
//             padding: "8px",
//             borderRadius: "6px",
//             backgroundColor: "#f5f5f5",
//             textAlign: "center",
//           }}
//         >
//           {label}
//         </Typography.Link>
//       ))}
//     </div>
//   );

//   return (
//     <Dropdown dropdownRender={() => gridMenu} trigger={["click"]}>
//       <Typography.Link>
//         <Space>
//           Investor Relations <DownOutlined />
//         </Space>
//       </Typography.Link>
//     </Dropdown>
//   );
// };

// export default InvestorRelationsDrop;
