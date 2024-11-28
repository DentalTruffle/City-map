
export default function Footer(){
    return(
        <>
<footer class="bg-lime-50 w-full shadow-lg">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center"> 
                <img src="/images/logo.png" class="size-24 rounded-full" alt="Nomad Travel Logo" />
                <span class="font-bold dark:border-gray-500 text-2xl ml-2">Nomad Travel</span> 
            </div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-lime-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/homepage" class="hover:underline me-4 md:me-6 text-base font-bold text-lime-500">About</a> 
                </li>
                <li>
                    <a href="/reviews" class="hover:underline me-4 md:me-6 text-base font-bold text-lime-500">Reviews</a> 
                </li>
                <li>
                    <a href="#" class="hover:underline text-base font-bold text-lime-500">Contact</a> 
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
        <span class="block text-sm text-gray-500 font-bold sm:text-center dark:text-gray-500">© 2024 Nomad Travel. All Rights Reserved.</span>
    </div>
</footer>

        </>
    )
}

