import { Navigate } from "react-router-dom";

export const Landing = () => <h2>Landing Page (Public)</h2>;

export const Home = () => {
  return <h2>Home Page (Private)</h2>;
};

export const Dashboard = () => <h2>Deshboard Page (Private)</h2>;

export const Analytics = () => (
  <h2>Analytics (Private, permission: 'analize')</h2>
);

export const Admin = () => <h2>Admin Page (Private, permission: 'admin')</h2>;
