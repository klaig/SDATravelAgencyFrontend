export interface Page<T> {
    content: T[];               // The array of your items (e.g., tours)
    pageable: {
      pageNumber: number;       // The current page number
      pageSize: number;         // The size of the page (number of items per page)
      offset: number;           // The offset of the page (used for calculating the starting point)
      sort: {                   // Sort object (may include multiple properties)
        sorted: boolean;        // Whether sorting was applied
        unsorted: boolean;      // Whether sorting was not applied
        empty: boolean;         // Whether the sort is empty
        // ... you can include more specific sort details if needed
      };
    };
    totalPages: number;         // The total number of pages available
    totalElements: number;      // The total number of elements across all pages
    last: boolean;              // Whether the current page is the last one
    size: number;               // Alias for pageSize, sometimes used interchangeably
    number: number;             // Alias for pageNumber
    numberOfElements: number;   // The actual number of elements on the current page
    first: boolean;             // Whether the current page is the first one
    empty: boolean;             // Whether the current page is empty
  }