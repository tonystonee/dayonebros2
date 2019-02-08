import query from 'query-string'
export default {
    computed: {
        uri(){
            return this.$_buildURI(this.endpoint, this.params);
        },
    },
    methods: {
        $_buildQuery(params){
            return query.stringify(params);
        },
        $_buildURI(endpoint, params){
            const queryString = query.stringify(params);
            return `${endpoint}?${queryString}`;
        },
    },
}