<script>
    import { qr } from '@svelte-put/qr/img';

    const generateQR = () => {

    }

    const PDFExport = () => {

    }
</script>

<div class="flex-col">
    <form class=" flex justify-center my-12" action="GET">
        <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" class="bg-gray-700 text-white border-2 border-white rounded-md p-2">
            <input type="text" placeholder="ID Nr." class="bg-gray-700 text-white border-2 border-white rounded-md p-2">    
            <input type="text" placeholder="Role" class="bg-gray-700 text-white border-2 border-white rounded-md p-2">
            <button class="bg-gray-700 text-white border-2 border-white rounded-md p-2" on:click={() => generateQR()}>Generate</button>
        </div>
    </form>
    <div class=" flex justify-center">
        <div class="h-48 w-48 bg-white flex justify-center  place-items-center rounded-md">            
            <img
                use:qr={{
                data: 'B, Hans, Ruedi, 123123123',
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
