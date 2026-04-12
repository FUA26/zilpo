export type ExampleSeed = {
  product: {
    overviewLabel: string;
    dashboard: {
      surfaceLabel: string;
      headline: string;
      description: string;
      stats: {
        sessions: number;
        uptime: string;
        status: string;
      };
      contract: string;
    };
    cards: {
      theme: {
        badge: string;
        title: string;
        description: string;
      };
      server: {
        badge: string;
        title: string;
        description: string;
      };
      reuse: {
        badge: string;
        title: string;
        description: string;
      };
    };
    shared: {
      title: string;
      description: string;
    };
  };
  admin: {
    overviewLabel: string;
    headline: string;
    description: string;
    contract: string;
    cards: {
      users: {
        badge: string;
        title: string;
        description: string;
      };
      checks: {
        badge: string;
        title: string;
        description: string;
      };
      mode: {
        badge: string;
        title: string;
        description: string;
      };
    };
    dashboard: {
      surfaceLabel: string;
      headline: string;
      description: string;
      stats: {
        jobs: {
          badge: string;
          title: string;
          description: string;
        };
        alerts: {
          badge: string;
          title: string;
          description: string;
        };
        health: {
          badge: string;
          title: string;
          description: string;
        };
      };
    };
  };
};

export function createExampleSeed(): ExampleSeed {
  return {
    product: {
      overviewLabel: "Starter overview",
      dashboard: {
        surfaceLabel: "Dashboard surface",
        headline:
          "A clean operational surface for the first product workflows.",
        description:
          "This route subtree is where product-specific content grows, while the shell and foundation stay shared.",
        stats: {
          sessions: 128,
          uptime: "99.9%",
          status: "Ready",
        },
        contract:
          "Keep the shell responsible for layout, navigation, and frame-level experience only. Feature state, data fetching, and mutations belong outside this file.",
      },
      cards: {
        theme: {
          badge: "Theme first",
          title: "Theme first",
          description:
            "Color, spacing, radius, and type can be switched without touching the component tree.",
        },
        server: {
          badge: "Server first",
          title: "Server first",
          description:
            "The shell is a server layout unless a client boundary is actually needed.",
        },
        reuse: {
          badge: "Reuse ready",
          title: "Reuse ready",
          description:
            "`web` and `admin` start separate, then promote shared pieces only when the reuse is real.",
        },
      },
      shared: {
        title: "Shadcn-style primitives in `packages/ui`",
        description:
          "Phase 4 promotes reusable primitives into the shared package so the two apps can keep a consistent base.",
      },
    },
    admin: {
      overviewLabel: "Admin overview",
      headline: "Operational companion surface for product ops.",
      description:
        "The admin app shares the same primitives and theme, but keeps its own route tree and operational language.",
      contract:
        "Keep admin lean, operational, and separate from product-facing feature composition.",
      cards: {
        users: {
          badge: "Users",
          title: "42",
          description: "Visible in the last sync.",
        },
        checks: {
          badge: "Checks",
          title: "Green",
          description: "Shared gate surface is ready.",
        },
        mode: {
          badge: "Mode",
          title: "Ops",
          description: "Admin-only workflows live here.",
        },
      },
      dashboard: {
        surfaceLabel: "Admin dashboard",
        headline: "The operational route subtree.",
        description:
          "This surface stays small, obvious, and efficient for the team that runs the product.",
        stats: {
          jobs: {
            badge: "Jobs",
            title: "18",
            description: "Queued admin tasks.",
          },
          alerts: {
            badge: "Alerts",
            title: "2",
            description: "Requires attention.",
          },
          health: {
            badge: "Health",
            title: "Stable",
            description: "Admin surface is healthy.",
          },
        },
      },
    },
  };
}
