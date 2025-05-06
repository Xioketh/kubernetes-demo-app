import React from 'react';

function App() {
    const technologies = [
        {
            name: "Kubernetes",
            description: "Container orchestration system for automating deployment, scaling, and management of containerized applications",
            icon: "⎈"
        },
        {
            name: "Docker",
            description: "Platform for developing, shipping, and running applications in containers",
            icon: "🐳"
        },
        {
            name: "React",
            description: "JavaScript library for building user interfaces",
            icon: "⚛️"
        },
        {
            name: "Nginx",
            description: "Web server that can also be used as a reverse proxy, load balancer, and HTTP cache",
            icon: "🌐"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Kubernetes Demo Application
                    </h1>
                    <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                        A showcase of containerization and orchestration technologies
                    </p>
                </div>

                <div className="mt-12 bg-white shadow overflow-hidden rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h2 className="text-lg font-medium text-gray-900">Technologies Used</h2>
                        <div className="mt-5 border-t border-gray-200">
                            <dl className="divide-y divide-gray-200">
                                {technologies.map((tech) => (
                                    <div key={tech.name} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                                            <span className="text-2xl mr-2">{tech.icon}</span>
                                            {tech.name}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {tech.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Kubernetes Deployment Information
                        </h3>
                        <div className="mt-2 max-w-xl text-sm text-gray-500">
                            <p>
                                This application is deployed using Kubernetes, demonstrating containerization principles and orchestration capabilities.
                            </p>
                        </div>
                        <div className="mt-5">
                            <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                                <div className="sm:flex sm:items-center">
                                    <div className="mt-3 sm:mt-0 sm:ml-4">
                                        <div className="text-sm font-medium text-gray-900">Deployment Details</div>
                                        <div className="mt-1 text-sm text-gray-600">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Deployment: 2 replicas</li>
                                                <li>Service Type: LoadBalancer</li>
                                                <li>Container: Frontend with Nginx</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;