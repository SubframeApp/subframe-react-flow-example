module.exports = {
  // ...

  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(238, 242, 255)",
          100: "rgb(224, 231, 255)",
          200: "rgb(199, 210, 254)",
          300: "rgb(165, 180, 252)",
          400: "rgb(129, 140, 248)",
          500: "rgb(99, 102, 241)",
          600: "rgb(79, 70, 229)",
          700: "rgb(67, 56, 202)",
          800: "rgb(55, 48, 163)",
          900: "rgb(49, 46, 129)",
        },
        neutral: {
          0: "rgb(255, 255, 255)",
          50: "rgb(249, 250, 251)",
          100: "rgb(243, 244, 246)",
          200: "rgb(229, 231, 235)",
          300: "rgb(209, 213, 219)",
          400: "rgb(156, 163, 175)",
          500: "rgb(107, 114, 128)",
          600: "rgb(75, 85, 99)",
          700: "rgb(55, 65, 81)",
          800: "rgb(31, 41, 55)",
          900: "rgb(17, 24, 39)",
          950: "rgb(3, 7, 18)",
        },
        error: {
          50: "rgb(254, 242, 242)",
          100: "rgb(254, 226, 226)",
          200: "rgb(254, 202, 202)",
          300: "rgb(252, 165, 165)",
          400: "rgb(248, 113, 113)",
          500: "rgb(239, 68, 68)",
          600: "rgb(220, 38, 38)",
          700: "rgb(185, 28, 28)",
          800: "rgb(153, 27, 27)",
          900: "rgb(127, 29, 29)",
        },
        warning: {
          50: "rgb(254, 252, 232)",
          100: "rgb(254, 249, 195)",
          200: "rgb(254, 240, 138)",
          300: "rgb(253, 224, 71)",
          400: "rgb(250, 204, 21)",
          500: "rgb(234, 179, 8)",
          600: "rgb(202, 138, 4)",
          700: "rgb(161, 98, 7)",
          800: "rgb(133, 77, 14)",
          900: "rgb(113, 63, 18)",
        },
        success: {
          50: "rgb(236, 253, 245)",
          100: "rgb(209, 250, 229)",
          200: "rgb(167, 243, 208)",
          300: "rgb(110, 231, 183)",
          400: "rgb(52, 211, 153)",
          500: "rgb(16, 185, 129)",
          600: "rgb(5, 150, 105)",
          700: "rgb(4, 120, 87)",
          800: "rgb(6, 95, 70)",
          900: "rgb(6, 78, 59)",
        },
        "brand-primary": "rgb(79, 70, 229)",
        "default-font": "rgb(17, 24, 39)",
        "subtext-color": "rgb(107, 114, 128)",
        "neutral-border": "rgb(229, 231, 235)",
        white: "rgb(255, 255, 255)",
        "default-background": "rgb(255, 255, 255)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "600",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "heading-3": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "heading-2": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
      },
      fontFamily: {
        caption: "Source Sans Pro",
        "caption-bold": "Source Sans Pro",
        body: "Source Sans Pro",
        "body-bold": "Source Sans Pro",
        "heading-3": "Source Sans Pro",
        "heading-2": "Source Sans Pro",
        "heading-1": "Source Sans Pro",
        "monospace-body": "monospace",
      },
      boxShadow: {
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
        overlay:
          "0px 8px 16px -4px rgba(0, 0, 0, 0.08), 0px 2px 8px -4px rgba(0, 0, 0, 0.08)",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};
