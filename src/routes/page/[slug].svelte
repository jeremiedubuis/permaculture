<script context="module">
    export async function preload({ params, query }) {
        // the `slug` parameter is available because
        // this file is called [slug].html
        const res = await this.fetch(`api/page/${params.slug}`);
        const data = await res.json();

        if (res.status === 200) {
            return { page: data };
        } else {
            this.error(res.status, data.message);
        }
    }

</script>

<script>
	export let page;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<h1>{page.title}</h1>
<section>
    {@html page.content}
</section>

