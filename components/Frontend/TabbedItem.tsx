"use client";
import React from "react";
import { Tabs } from "flowbite-react";
import ServiceList from "@/components/Frontend/Services/ServiceList";
import LinkCard from "@/components/Frontend/Doctor/LinkCard";
import { GlassesIcon, RadicalIcon, Stethoscope, User } from "lucide-react";

export default function TabbedItem() {
  const services = [
    {
      title: "Telehealth",
      image: "/doctor.png",
      slug: "telehealth",
    },
    {
      title: "Weight loss",
      image: "/doctor.png",
      slug: "weight-loss",
    },
    {
      title: "Video prescription refill",
      image: "/doctor.png",
      slug: "video-prescription-refill",
    },
    {
      title: "UTI consult",
      image: "/doctor.png",
      slug: "uti-consult",
    },
    {
      title: "ED consult",
      image: "/doctor.png",
      slug: "ed-consult",
    },
    {
      title: "Mental health consult",
      image: "/doctor.png",
      slug: "mental-health-consult",
    },
    {
      title: "Urgent care visit",
      image: "/doctor.png",
      slug: "urgent-care-visit",
    },
  ];

  const tabs = [
    {
      title: "Popular Services",
      icon: Stethoscope,
      component: <ServiceList data={services} />,
    },
    {
      title: "Doctors",
      icon: User,
      component: <LinkCard />,
    },
    {
      title: "Spesialist",
      icon: GlassesIcon,
      component: <LinkCard className="bg-blue-800" />,
    },
    {
      title: "Symptoms",
      icon: RadicalIcon,
      component: <LinkCard className="bg-purple-500" />,
    },
  ];

  return (
    <Tabs aria-label="Default tabs" variant="default">
      {tabs.map((tab, index) => (
        <Tabs.Item key={index} title={tab.title} icon={tab.icon}>
          {tab.component}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
