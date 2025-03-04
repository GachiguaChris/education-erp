import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  BookOpen, 
  Users, 
  Database, 
  FileText, 
  Settings, 
  Bell, 
  User, 
  BarChart2, 
  Zap, 
  Search,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

const EducationAIDashboard = () => {
  // State management
  const [activeSection, setActiveSection] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [processingStatus, setProcessingStatus] = useState('active');
  const [modelAccuracy, setModelAccuracy] = useState(92.4);
  
  // Simulate AI model updates
  useEffect(() => {
    const interval = setInterval(() => {
      setModelAccuracy(prev => {
        const newValue = prev + (Math.random() > 0.7 ? 0.2 : -0.1) * Math.random();
        return Number(Math.min(Math.max(newValue, 90), 99).toFixed(1));
      });
      
      setProcessingStatus(['active', 'learning', 'analyzing', 'idle'][Math.floor(Math.random() * 4)]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Status indicator color
  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-green-500';
      case 'learning': return 'text-blue-500';
      case 'analyzing': return 'text-purple-500';
      default: return 'text-gray-400';
    }
  };

  // Sample AI metrics data
  const aiMetrics = [
    { name: 'Prediction Accuracy', value: `${modelAccuracy}%`, change: '+1.2%' },
    { name: 'Learning Patterns', value: '1,845', change: '+103' },
    { name: 'Students Analyzed', value: '12,432', change: '+328' },
    { name: 'Processing Time', value: '36ms', change: '-5ms' }
  ];

  // Sample AI insights
  const aiInsights = [
    { 
      id: 1, 
      title: 'Student Performance Pattern', 
      description: 'Mathematics performance tends to improve after interactive sessions rather than traditional lectures.',
      recommendation: 'Consider increasing interactive learning components in Mathematics curriculum.',
      confidence: 92
    },
    { 
      id: 2, 
      title: 'Attendance Correlation', 
      description: 'Strong correlation found between morning attendance and exam performance across all science subjects.',
      recommendation: 'Schedule critical lessons during peak attendance periods.',
      confidence: 88
    },
    { 
      id: 3, 
      title: 'Learning Resource Effectiveness', 
      description: 'Digital library resources show 24% higher engagement than physical materials for history courses.',
      recommendation: 'Expand digital library for history department.',
      confidence: 95
    }
  ];

  // Sample at-risk student data
  const atRiskStudents = [
    { id: 'S2854', name: 'Emma Thompson', risk: 'high', factors: ['Attendance', 'Assignment Completion'], course: 'Computer Science' },
    { id: 'S3128', name: 'Michael Rodriguez', risk: 'medium', factors: ['Test Performance'], course: 'Biology' },
    { id: 'S2967', name: 'Sophia Wang', risk: 'medium', factors: ['Participation', 'Quiz Scores'], course: 'Economics' },
    { id: 'S3042', name: 'James Wilson', risk: 'high', factors: ['Attendance', 'Midterm Scores', 'Participation'], course: 'Physics' }
  ];

  // Sample chatbot messages
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', message: 'Welcome to the AI Assistant. How can I help with student analytics today?' },
    { sender: 'user', message: 'Show me students at risk of failing' },
    { sender: 'ai', message: 'Ive identified 4 students who may need intervention. See the At-Risk Students panel for details.' }
]);
  const [newMessage, setNewMessage] = useState('');
  
  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    
    setChatMessages([
      ...chatMessages, 
      { sender: 'user', message: newMessage }
    ]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { 
          sender: 'ai', 
          message: 'I\'ve analyzed your request and updated the dashboard with relevant information. You can also view detailed reports in the Analytics section.'
        }
      ]);
    }, 1000);
    
    setNewMessage('');
  };

  // Handle button clicks
  const handleGenerateReport = () => {
    alert('Generating comprehensive AI insights report...');
  };
  
  const handleOptimizeModels = () => {
    alert('Starting AI model optimization process...');
  };
  
  const handlePredictiveAnalysis = () => {
    alert('Running predictive analysis for upcoming semester...');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center space-x-2">
          <BookOpen className="text-blue-700" size={24} />
          <h1 className="text-xl font-bold">
            <span className="text-blue-700">Edu</span>
            <span className="text-gray-800">Smart</span>
            <span className="text-blue-700"> ERP</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="bg-gray-100 flex items-center p-2 rounded-lg border border-gray-200">
              <Search size={18} className="text-gray-500" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none ml-2 w-40 text-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="relative">
            <Bell size={20} className="text-gray-600" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="font-medium">Administrator</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-16 md:w-56 h-screen bg-white border-r border-gray-200 flex flex-col items-center md:items-start p-4">
          {[
            { id: 'dashboard', icon: <BarChart2 size={20} />, label: 'Dashboard' },
            { id: 'ai', icon: <Brain size={20} />, label: 'AI Center' },
            { id: 'students', icon: <Users size={20} />, label: 'Students' },
            { id: 'courses', icon: <BookOpen size={20} />, label: 'Courses' },
            { id: 'reports', icon: <FileText size={20} />, label: 'Reports' },
            { id: 'settings', icon: <Settings size={20} />, label: 'Settings' }
          ].map(item => (
            <button
              key={item.id}
              className={`flex items-center space-x-3 p-3 rounded-lg w-full my-1 transition-all ${
                item.id === 'ai' 
                  ? 'bg-blue-700 text-white' 
                  : 'hover:bg-blue-50 text-gray-700'
              }`}
            >
              {item.icon}
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">AI Education Center</h2>
                <p className="text-gray-600">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${getStatusColor(processingStatus)}`}></span>
                  Neural network status: <span className="capitalize">{processingStatus}</span>
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={handleOptimizeModels}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center space-x-2"
                >
                  <Zap size={18} />
                  <span>Optimize Models</span>
                </button>
                
                <button 
                  onClick={handleGenerateReport}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Generate Report
                </button>
              </div>
            </div>
            
            {/* AI Tab Navigation */}
            <div className="flex space-x-1 mt-6 border-b border-gray-200">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'insights', label: 'AI Insights' },
                { id: 'predictions', label: 'Predictive Analytics' },
                { id: 'intervention', label: 'Student Intervention' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-4 py-2 font-medium rounded-t-lg ${
                    activeSection === tab.id
                      ? 'text-blue-700 border-b-2 border-blue-700 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* AI Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {aiMetrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-gray-600">{metric.name}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-opacity-20 ${
                    metric.change.startsWith('+') ? 'bg-green-500 text-green-500' : 'bg-red-500 text-red-500'
                  }`}>
                    {metric.change.startsWith('+') ? '↑' : '↓'}
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
                  <span className={`ml-2 text-sm ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </span>
                </div>
                <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" 
                       style={{ width: `${Math.random() * 60 + 40}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Neural Network Visualization */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800">Educational Neural Network</h3>
              <button 
                onClick={handlePredictiveAnalysis}
                className="px-3 py-1 rounded bg-blue-600 text-white opacity-90 hover:opacity-100 transition text-sm"
              >
                Run Analysis
              </button>
            </div>
            
            <div className="h-64 flex items-center justify-center text-center relative">
              {/* Neural network visualization placeholder */}
              <div className="grid grid-cols-4 gap-6 w-full h-full relative">
                {Array.from({ length: 4 }).map((_, layerIndex) => (
                  <div key={layerIndex} className="flex flex-col justify-center items-center relative">
                    {Array.from({ length: layerIndex === 0 || layerIndex === 3 ? 4 : 6 }).map((_, nodeIndex) => (
                      <div 
                        key={nodeIndex} 
                        className={`w-4 h-4 rounded-full my-2 ${
                          layerIndex === 0 
                            ? 'bg-blue-500' 
                            : layerIndex === 3 
                              ? 'bg-purple-500' 
                              : 'bg-indigo-500'
                        } shadow-md`}
                      >
                        <div className="absolute w-full h-full animate-pulse opacity-50 rounded-full bg-current"></div>
                      </div>
                    ))}
                    <div className="mt-2 text-gray-600 text-xs">
                      {layerIndex === 0 ? 'Input' : layerIndex === 3 ? 'Output' : `Hidden ${layerIndex}`}
                    </div>
                  </div>
                ))}
                
                {/* Connection lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg width="100%" height="100%" className="opacity-30">
                    <defs>
                      <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    <path d="M80,50 C150,20, 250,80, 320,50" stroke="url(#networkGradient)" strokeWidth="1" fill="none" />
                    <path d="M80,100 C170,60, 230,140, 320,100" stroke="url(#networkGradient)" strokeWidth="1" fill="none" />
                    <path d="M80,150 C190,120, 210,180, 320,150" stroke="url(#networkGradient)" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
              <div>Input: Student data, course materials, assessments</div>
              <div>Output: Performance predictions, personalized recommendations</div>
            </div>
          </div>
          
          {/* AI Insights and Chatbot */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Insights */}
            <div className="lg:col-span-2 bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-gray-800">AI-Generated Insights</h3>
                <div className="text-sm text-gray-500">Updated 2 hours ago</div>
              </div>
              
              <div className="space-y-4">
                {aiInsights.map(insight => (
                  <div 
                    key={insight.id} 
                    className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition bg-blue-50"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Lightbulb size={18} className="text-blue-700 mr-2" />
                        <h4 className="font-medium text-gray-800">{insight.title}</h4>
                      </div>
                      <div className="text-sm text-gray-500">
                        Confidence: <span className="text-blue-600 font-medium">{insight.confidence}%</span>
                      </div>
                    </div>
                    
                    <p className="mt-2 text-gray-600 text-sm">{insight.description}</p>
                    
                    <div className="mt-3 flex items-start">
                      <TrendingUp size={16} className="text-green-600 mr-2 mt-0.5" />
                      <p className="text-green-600 text-sm font-medium">
                        Recommendation: {insight.recommendation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-4 w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center justify-center">
                <span>View All Insights</span>
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            
            {/* AI Chatbot */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col h-96">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-gray-800">AI Assistant</h3>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-xs text-green-500">Online</span>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto mb-4 border border-gray-200 rounded-lg p-3 space-y-3">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex items-start ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                    {msg.sender === 'ai' && (
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs mr-2 flex-shrink-0 mt-1">
                        AI
                      </div>
                    )}
                    
                    <div className={`p-2 rounded-lg max-w-[85%] ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                    
                    {msg.sender === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs ml-2 flex-shrink-0 mt-1">
                        You
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Ask about student analytics..." 
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-l-lg p-2 outline-none focus:border-blue-300"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button 
                  className="bg-blue-600 p-2 rounded-r-lg text-white" 
                  onClick={sendMessage}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* At-Risk Students */}
          <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-gray-800">AI-Identified At-Risk Students</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800 transition flex items-center">
                View Detailed Analysis <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-3 text-gray-600 font-medium">Student ID</th>
                    <th className="text-left py-2 px-3 text-gray-600 font-medium">Name</th>
                    <th className="text-left py-2 px-3 text-gray-600 font-medium">Course</th>
                    <th className="text-left py-2 px-3 text-gray-600 font-medium">Risk Factors</th>
                    <th className="text-left py-2 px-3 text-gray-600 font-medium">Risk Level</th>
                    <th className="text-right py-2 px-3 text-gray-600 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {atRiskStudents.map(student => (
                    <tr key={student.id} className="border-t border-gray-100 hover:bg-blue-50 transition">
                      <td className="py-3 px-3 text-gray-800">{student.id}</td>
                      <td className="py-3 px-3 text-gray-800 font-medium">{student.name}</td>
                      <td className="py-3 px-3 text-gray-800">{student.course}</td>
                      <td className="py-3 px-3">
                        <div className="flex flex-wrap">
                          {student.factors.map((factor, idx) => (
                            <span 
                              key={idx} 
                              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded mr-1 mb-1"
                            >
                              {factor}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          student.risk === 'high' 
                            ? 'bg-red-100 text-red-700' 
                            : student.risk === 'medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-green-100 text-green-700'
                        }`}>
                          {student.risk.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Key Features Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-lg text-white">
              <div className="mb-2">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Smart Chatbot Integration</h3>
              <p className="text-blue-100 text-sm">
                AI-powered chatbot provides instant answers to student questions and assists faculty with administrative tasks.
              </p>
              <button className="mt-4 px-3 py-1 bg-white text-blue-700 rounded text-sm font-medium">
                Configure
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-lg text-white">
              <div className="mb-2">
                <Brain size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Predictive Analytics</h3>
              <p className="text-purple-100 text-sm">
                Predict student performance and identify improvement opportunities through advanced machine learning models.
              </p>
              <button className="mt-4 px-3 py-1 bg-white text-purple-700 rounded text-sm font-medium">
                View Predictions
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600 to-blue-500 p-4 rounded-lg text-white">
              <div className="mb-2">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Learning Pattern Analysis</h3>
              <p className="text-indigo-100 text-sm">
                Analyze student engagement patterns to optimize curriculum and teaching methods for better outcomes.
              </p>
              <button className="mt-4 px-3 py-1 bg-white text-indigo-700 rounded text-sm font-medium">
                View Analytics
              </button>
            </div>
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 bg-gray-100 rounded-lg p-3 text-sm text-gray-600 flex justify-between items-center">
            <div className="flex items-center">
              <span className={`inline-block w-2 h-2 rounded-full mr-2 ${getStatusColor(processingStatus)}`}></span>
              AI System Active | Last Update: Today 10:24 AM
            </div>
            <div className="flex space-x-4">
              <span>Model Version: 2.3.14</span>
              <span>Accuracy: {modelAccuracy}%</span>
              <span>Processing: 42ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAIDashboard;