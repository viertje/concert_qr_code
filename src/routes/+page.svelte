<script>
    import { writable } from 'svelte/store';
    import { qr } from '@svelte-put/qr/img';

    let userData = writable({
        name: "",
        IDNr: "",
        Role: ""
    })

    const PDFExport = () => {

    }
</script>

<div class="flex-col">
    <div class=" flex justify-center my-12">
        <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" class="bg-gray-700 text-white border-2 border-white rounded-md p-2" bind:value={$userData.name}>
            <input type="text" placeholder="ID Nr." class="bg-gray-700 text-white border-2 border-white rounded-md p-2" bind:value={$userData.IDNr}>    
            <input type="text" placeholder="Role" class="bg-gray-700 text-white border-2 border-white rounded-md p-2" bind:value={$userData.Role}>
        </div>
    </div>
    <div class=" flex justify-center">
        <div class="h-48 w-48 bg-white flex justify-center  place-items-center rounded-md">            
            <img
                use:qr={{
                data: `${$userData.name} ${$userData.IDNr} ${$userData.Role}`,
                logo: 'https://svelte-put.vnphanquang.com/images/svelte-put-logo.svg',
                shape: 'circle',
                anchorInnerFill: 'black',
                anchorOuterFill: 'black',
                moduleFill: 'black',
                }}
                alt="qr"
            />
        </div>
    </div>
    <div class=" flex justify-center">
        <button class="bg-white m-8 p-2 rounded-md" on:click={() => PDFExport()}>Export PDF</button>
    </div>
</div>
