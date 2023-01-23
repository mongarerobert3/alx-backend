##!/usr/bin/env python3
"""index range"""


def index_range(page: int, page_size: int) -> tuple:
    """tuple of size two containing a start index and an end index """
    index_tuple = page_size * (page - 1), page * page_size
    return index_tuple
