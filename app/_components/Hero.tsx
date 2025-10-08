import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Gift, Globe2, Landmark, Plane, Send, } from "lucide-react";

const suggestions = [
  {
    title: "A 5-day trip to Paris",
    description:
      "Explore the city of lights with visits to the Eiffel Tower, Louvre, and more.",
    icon: <Globe2 className="text-blue-400 h-5 w-5 hover:text-white" />,
  },
  {
    title: "Individual trip to Japan",
    description:
      "Experience the blend of tradition and modernity in Tokyo, Kyoto, and Osaka.",
    icon: <Plane className="text-green-400 h-5 w-5" />,
  },
  {
    title: "Family trip to New York",
    description:
      "Discover iconic landmarks like Times Square, Central Park, and the Statue of Liberty.",
    icon: <Landmark className="text-orange-400 h-5 w-5" />,
  },
  {
    title: "Surprise me",
    description:
      "Let me surprise you with a unique travel experience tailored just for you.",
    icon: <Gift className="text-blue-400 h-5 w-5" />,
  },
];

function Hero() {
  return (
    <div className="mt-24 flex w-full justify-center">
      {/* Content */}
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-xl font-bold md:text-5xl">
          Plan your perfect <span className="text-primary">trip</span> with AI
        </h1>
        <p className=" text-gray-600 text-lg">
          Tell me your preferences, and I'll create a personalized itinerary
          just for you.
        </p>

        {/* Input */}
        <div>
          <div className="border border-gray-300 rounded-2xl p-4 hover:shadow-md transition-shadow relative">
            <Textarea
              placeholder="Create a travel plan for me"
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            />
            <Button size={"icon"} className="absolute right-6 bottom-6">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Suggestions */}
        <div className="flex gap-5">
          {suggestions.map((suggestions, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white"
            >
              {suggestions.icon}
              <h2 className="text-sm">{suggestions.title}</h2>
            </div>
          ))}
        </div>
        {/* Video Section */}
      </div>
    </div>
  );
}

export default Hero;
