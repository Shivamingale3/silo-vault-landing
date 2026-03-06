export async function getLatestRelease() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/Shivamingale3/silo-vault/releases/latest",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );
    if (!res.ok) throw new Error("Failed to fetch release");
    const data = await res.json();
    return {
      version: data.tag_name,
      downloadUrl:
        data.assets?.[0]?.browser_download_url ||
        "https://github.com/Shivamingale3/silo-vault/releases/latest",
    };
  } catch (error) {
    return {
      version: "Latest",
      downloadUrl:
        "https://github.com/Shivamingale3/silo-vault/releases/latest",
    };
  }
}
