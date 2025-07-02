// src/pages/ProjectDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectDetails() {
  const { id } = useParams();
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="p-4 text-center text-red-600">المشروع غير موجود</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">{project.title}</h1>
      <p className="text-gray-600 mb-4">{project.description}</p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div><strong>نوع المشروع:</strong> {project.type}</div>
        <div><strong>السعر:</strong> {project.price} ل.س</div>
        <div><strong>نسبة الإنجاز:</strong> {project.progress}%</div>
        <div><strong>تاريخ البدء:</strong> {project.startDate}</div>
        <div><strong>تاريخ التسليم:</strong> {project.deliveryDate}</div>
        <div><strong>المسؤول:</strong> {project.developer}</div>
        <div><strong>التواصل:</strong> {project.contact}</div>
      </div>

      <h2 className="text-xl font-semibold mb-2">صور المشروع</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {project.images?.map((img, i) => (
          <img key={i} src={img} alt="project" className="w-full h-40 object-cover rounded shadow" />
        ))}
      </div>
    </div>
  );
}
