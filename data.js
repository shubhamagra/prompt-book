/* ==========================================
   PromptVault - data.js
   ========================================== */

const prompts = [

{
    id:1,
    title:"SEO Blog Writer",
    category:"Marketing",
    description:"Generate long-form SEO blogs optimized for Google ranking.",
    image:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    popularity:985,
    prompt:`You are an expert SEO strategist.

Write a comprehensive SEO article.

Requirements:
• Human written
• Minimum 3000 words
• Include semantic keywords
• H1, H2, H3 headings
• FAQ section
• Internal linking suggestions
• CTA
• Meta Title
• Meta Description
• Schema suggestions
• NLP optimized

Return in Markdown format.`
},

{
    id:2,
    title:"Customer Support Reply",
    category:"Customer Service",
    description:"Generate empathetic customer support replies.",
    image:"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    popularity:825,
    prompt:`Act as a professional customer support executive.

Understand the customer's issue.

Respond politely.

Apologize where needed.

Offer a practical solution.

Keep the tone friendly and professional.`
},

{
    id:3,
    title:"Instagram Caption Generator",
    category:"Content Creation",
    description:"Create engaging captions with hashtags and CTA.",
    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    popularity:1200,
    prompt:`Create 10 Instagram captions.

Tone:
Friendly
Modern
Engaging

Include:
• Hook
• Emoji
• CTA
• Trending hashtags

Do not repeat ideas.`
},

{
    id:4,
    title:"Sales Cold Email",
    category:"Sales",
    description:"Professional cold outreach email template.",
    image:"https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
    popularity:1420,
    prompt:`Write a cold sales email.

Objective:
Book a meeting.

Length:
Under 150 words.

Structure:
Hook
Pain Point
Solution
CTA

Professional tone.`
},

{
    id:5,
    title:"Interview Questions",
    category:"HR",
    description:"Generate interview questions based on any role.",
    image:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
    popularity:510,
    prompt:`Generate 20 interview questions.

Role:
Software Engineer

Include:

Technical

Behavioral

Problem Solving

Communication

Leadership`
},

{
    id:6,
    title:"Budget Planner",
    category:"Finance",
    description:"Generate a financial budgeting strategy.",
    image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    popularity:600,
    prompt:`Create a monthly budget.

Income

Expenses

Savings

Emergency Fund

Investment Allocation

Risk Analysis

Return in table format.`
},

{
    id:7,
    title:"Business Strategy",
    category:"Strategy",
    description:"Develop a complete business strategy.",
    image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
    popularity:910,
    prompt:`Act as a senior business consultant.

Create:

Vision

Mission

SWOT

Competitor Analysis

Growth Roadmap

Marketing Strategy

KPIs

Risk Assessment`
},

{
    id:8,
    title:"Product Requirements Document",
    category:"Product",
    description:"Generate a professional PRD.",
    image:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
    popularity:790,
    prompt:`Write a Product Requirement Document.

Include:

Goals

Problem

Features

User Stories

Acceptance Criteria

Timeline

Success Metrics`
},

{
    id:9,
    title:"Meeting Notes Summarizer",
    category:"Operations",
    description:"Summarize meetings into action items.",
    image:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    popularity:680,
    prompt:`Summarize meeting notes.

Return:

Summary

Key Decisions

Risks

Action Items

Owners

Deadlines`
},

{
    id:10,
    title:"General AI Assistant",
    category:"Other",
    description:"Universal assistant prompt.",
    image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    popularity:1800,
    prompt:`You are an AI expert.

Think step by step.

Ask clarifying questions when required.

Provide professional, structured answers.

Always explain your reasoning.

Offer alternatives whenever possible.`
}

];


/* ==========================================
Duplicate Data
Creates 100 Demo Cards
========================================== */

const sample = [...prompts];

for(let i=11;i<=100;i++){

    const item = sample[(i-1)%sample.length];

    prompts.push({

        ...item,

        id:i,

        title:item.title+" #"+i,

        popularity:Math.floor(Math.random()*2000)+200

    });

}
