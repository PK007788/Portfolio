import { useState, useEffect } from "react";

/**
 * Parses a GitHub URL to extract the 'owner/repo' string.
 * Supports: 
 * - https://github.com/owner/repo
 * - github.com/owner/repo
 * - owner/repo
 */
const parseRepoUrl = (url: string): string | null => {
  if (!url) return null;
  const cleanUrl = url.replace(/^(https?:\/\/)?(www\.)?github\.com\//, "");
  const parts = cleanUrl.split("/");
  if (parts.length >= 2) {
    return `${parts[0]}/${parts[1]}`;
  }
  return null;
};

export const useGitHubStars = (repoUrl: string, initialStars: number = 0) => {
  const [stars, setStars] = useState(initialStars);
  const [loading, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const repoPath = parseRepoUrl(repoUrl);
    if (!repoPath) return;

    // Check cache
    const cacheKey = `gh-stars-${repoPath}`;
    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
      const { count, timestamp } = JSON.parse(cachedData);
      // Cache valid for 30 minutes
      if (Date.now() - timestamp < 1000 * 60 * 30) {
        setStars(count);
        setIsLive(true);
        return;
      }
    }

    const fetchStars = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/repos/${repoPath}`);
        if (!response.ok) throw new Error("GitHub API failed");
        
        const data = await response.json();
        const count = data.stargazers_count;
        
        setStars(count);
        setIsLive(true);
        
        // Save to cache
        sessionStorage.setItem(cacheKey, JSON.stringify({
          count,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
        // Fallback to initial stars provided in portfolioData
        setStars(initialStars);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, [repoUrl, initialStars]);

  return { stars, loading, isLive };
};
