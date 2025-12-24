// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://omnilifeseytunutricosmética.com", // Change this to your production URL.
	description:
		"En Omnilifeseytunutricosmética nos especializamos en la comercialización de productos de cuidado personal, cosmética y bienestar, enfocados en apoyar un estilo de vida saludable y el equilibrio integral del cuerpo", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "Fotografía del inicio de la web", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Omnilife Seytu Nutricosmética", // Change this to your website's name,
	twitter: {
		card: "En Omnilifeseytunutricosmética nos especializamos en la comercialización de productos de cuidado personal, cosmética y bienestar, enfocados en apoyar un estilo de vida saludable y el equilibrio integral del cuerpo"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Omnilife Seytu Nutricosmética", // Change this to your website's name.
	short_name: "Omnilife Seytu Nutricosmética", // Change this to your website's short name.
	description:
		"En Omnilifeseytunutricosmética nos especializamos en la comercialización de productos de cuidado personal, cosmética y bienestar, enfocados en apoyar un estilo de vida saludable y el equilibrio integral del cuerpo", // Change this to be your website's description.
	 // Change this to your websites description.
	theme_color: "#ffffffff", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}


