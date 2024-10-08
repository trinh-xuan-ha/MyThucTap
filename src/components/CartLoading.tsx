const CartLoading = () => {
    return (
        <div className="relative h-[600px] w-1/6 space-y-4 overflow-hidden rounded-2xl bg-neutral-800 p-3  shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
            <div className="w-full h-2/3 rounded-t-2xl bg-neutral-600"></div>
            <div className="flex flex-col flex-grow text-start gap-y-4 justify-end ">
                <strong className="h-5 rounded-full w-2/3 bg-neutral-600"></strong>
                <strong className="h-5 rounded-full w-1/3 inline-block shadow bg-neutral-600"></strong>
                <strong className="h-5 rounded-full w-1/4 flex gap-x-2 bg-neutral-600 shadow"></strong>
                <strong className="h-6 rounded-full w-1/2 flex gap-x-2 bg-neutral-600 shadow"></strong>

            </div>
        </div>
    )
}
export default CartLoading;