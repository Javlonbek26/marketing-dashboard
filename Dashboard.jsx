import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', ROI: 2.1, Clicks: 1200 },
  { name: 'Feb', ROI: 2.5, Clicks: 1400 },
  { name: 'Mar', ROI: 3.2, Clicks: 1600 },
  { name: 'Apr', ROI: 3.8, Clicks: 1800 },
  { name: 'May', ROI: 4.0, Clicks: 2000 },
];

export default function Dashboard() {
  const [plan, setPlan] = useState("Basic");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="p-6">
      {!isLoggedIn ? (
        <Card className="max-w-md mx-auto">
          <CardContent>
            <h2 className="text-xl font-semibold">Login</h2>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2" />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2" />
            <Button onClick={handleLogin} className="mt-4 w-full">Login</Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Marketing Analytics Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold">Campaign Performance</h2>
                <LineChart width={500} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ROI" stroke="#8884d8" />
                  <Line type="monotone" dataKey="Clicks" stroke="#82ca9d" />
                </LineChart>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold">Subscription Plan</h2>
                <p className="mt-2">Current Plan: <strong>{plan}</strong></p>
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => setPlan("Basic")}>Basic</Button>
                  <Button onClick={() => setPlan("Pro")}>Pro</Button>
                  <Button onClick={() => setPlan("Enterprise")}>Enterprise</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
