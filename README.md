# Smart Campus Hub – Database Design
### Project Overview
This database is designed to handle a high-traffic campus portal where students find opportunities and engage in discussions. The focus is on fast loading for posts and structured data for applications.

### Collections & Linking
Users: Stores student profiles and their skill sets.

Opportunities: Stores internships and events. It embeds comments for performance.

Applications: A separate collection that references both User and Opportunity IDs.

### Embedding vs. Referencing Decisions
Embedding (Comments in Opportunities): I chose to embed comments because when a student views an internship, they should see the discussion immediately without a second database query.

Referencing (Users in Applications): I used referencing here to avoid making the Opportunity document too large. If 200 students apply, embedding them all would hit the 16MB limit and slow down the system.

### Smart Feature: Skill-Match Filtering
The "Smart" feature is Skill-Based Filtering.

How it works: Each Opportunity has a required_skills array.

Benefit: The system can automatically show students the most relevant internships based on the skills array in their User profile, reducing the time spent searching.