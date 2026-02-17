export interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}