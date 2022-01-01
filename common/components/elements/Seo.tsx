import Head from "next/head";

export interface IMeta {
    name: string;
    content: string;
}

export interface ISeoData {
    metaTitle: string;
    metaDescription: string;
    metaTags: IMeta[];
    preventIndexing: boolean;
    structuredData: any;
    metaImage: IImageData;
}

const Seo = ({
    metaTitle,
    metaDescription,
    metaTags,
    preventIndexing,
    structuredData,
    metaImage,
}: ISeoData) => (
    <>
        <Head>
            <title>{metaTitle}</title>
            <meta
                name="description"
                content={metaDescription}
                key="description"
            />
            <meta
                name="twitter:card"
                content="summary_large_image"
                key="twitter:card"
            />
            <meta property="og:url" content={"url"} key="og:url" />
            <meta property="og:title" content={metaTitle} key="og:title" />
            <meta
                property="og:description"
                content={metaDescription}
                key="og:description"
            />
            <meta property="og:image" content={metaImage.url} key="og:image" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href={"url"} />
            {metaTags &&
                metaTags.map((meta, index) => (
                    <meta name={meta.name} content={meta.content} key={index} />
                ))}
            {preventIndexing && (
                <>
                    <meta name="robots" content="noindex"></meta>
                    <meta name="googlebot" content="noindex"></meta>
                </>
            )}
            <script type="application/ld+json">{structuredData}</script>
        </Head>
    </>
);

export default Seo;
