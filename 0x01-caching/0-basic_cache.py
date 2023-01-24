#!/usr/bin/python3
""" BasicCache
"""

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """ BasicCaching defines:
      -inherits from basecaching
    """

    def __init__(self):
        """ Initiliaze
        """
        BaseCaching.__init__(self)

    def put(self, key, item):
        """Assigning to the dict"""
        if key is None or item is None:
            pass
        else:
            self.cache_data[key] = item

    def get(self, key):
        """return the value in self.cache_data"""
        if key is not None and key in self.cache_data.keys():
            return self.cache_data(key)
        return None
