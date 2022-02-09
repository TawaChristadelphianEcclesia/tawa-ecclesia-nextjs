module.exports = {
    client: {
        includes: ["./common/api/**/**"],
        service: {
            name: "downloaded-schema",
            localSchemaFile:
                "./common/api/graphql-schema.json",
        },
    },
};
