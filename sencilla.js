@@ -0,0 +1,319 @@
{
  "aggregate": {
    "counters": {
      "http.codes.200": 2000,
      "http.responses": 2000,
      "http.downloaded_bytes": 42000,
      "plugins.metrics-by-endpoint./sencilla.codes.200": 2000,
      "http.requests": 2000,
      "vusers.failed": 0,
      "vusers.completed": 50,
      "vusers.created_by_name.0": 50,
      "vusers.created": 50
    },
    "rates": {
      "http.request_rate": 137
    },
    "firstCounterAt": 1702742862493,
    "firstHistogramAt": 1702742862505,
    "lastCounterAt": 1702742870037,
    "lastHistogramAt": 1702742870037,
    "firstMetricAt": 1702742862493,
    "lastMetricAt": 1702742870037,
    "period": 1702742870000,
    "summaries": {
      "http.response_time": {
        "min": 1,
        "max": 463,
        "count": 2000,
        "mean": 156,
        "p50": 175.9,
        "median": 175.9,
        "p75": 183.1,
        "p90": 186.8,
        "p95": 190.6,
        "p99": 361.5,
        "p999": 432.7
      },
      "plugins.metrics-by-endpoint.response_time./sencilla": {
        "min": 1,
        "max": 463,
        "count": 2000,
        "mean": 156,
        "p50": 175.9,
        "median": 175.9,
        "p75": 183.1,
        "p90": 186.8,
        "p95": 190.6,
        "p99": 361.5,
        "p999": 432.7
      },
      "vusers.session_length": {
        "min": 3021.8,
        "max": 6674.3,
        "count": 50,
        "mean": 6252.3,
        "p50": 6569.8,
        "median": 6569.8,
        "p75": 6569.8,
        "p90": 6569.8,
        "p95": 6702.6,
        "p99": 6702.6,
        "p999": 6702.6
      }
    },
    "histograms": {
      "http.response_time": {
        "min": 1,
        "max": 463,
        "count": 2000,
        "mean": 156,
        "p50": 175.9,
        "median": 175.9,
        "p75": 183.1,
        "p90": 186.8,
        "p95": 190.6,
        "p99": 361.5,
        "p999": 432.7
      },
      "plugins.metrics-by-endpoint.response_time./sencilla": {
        "min": 1,
        "max": 463,
        "count": 2000,
        "mean": 156,
        "p50": 175.9,
        "median": 175.9,
        "p75": 183.1,
        "p90": 186.8,
        "p95": 190.6,
        "p99": 361.5,
        "p999": 432.7
      },
      "vusers.session_length": {
        "min": 3021.8,
        "max": 6674.3,
        "count": 50,
        "mean": 6252.3,
        "p50": 6569.8,
        "median": 6569.8,
        "p75": 6569.8,
        "p90": 6569.8,
        "p95": 6702.6,
        "p99": 6702.6,
        "p999": 6702.6
      }
    }
  },
  "intermediate": [
    {
      "counters": {
        "vusers.created_by_name.0": 50,
        "vusers.created": 50,
        "http.requests": 1992,
        "http.codes.200": 1990,
        "http.responses": 1990,
        "http.downloaded_bytes": 41790,
        "plugins.metrics-by-endpoint./sencilla.codes.200": 1990,
        "vusers.failed": 0,
        "vusers.completed": 48
      },
      "rates": {
        "http.request_rate": 266
      },
      "http.request_rate": null,
      "firstCounterAt": 1702742862493,
      "firstHistogramAt": 1702742862505,
      "lastCounterAt": 1702742869999,
      "lastHistogramAt": 1702742869999,
      "firstMetricAt": 1702742862493,
      "lastMetricAt": 1702742869999,
      "period": "1702742860000",
      "summaries": {
        "http.response_time": {
          "min": 1,
          "max": 463,
          "count": 1990,
          "mean": 156.8,
          "p50": 175.9,
          "median": 175.9,
          "p75": 183.1,
          "p90": 186.8,
          "p95": 190.6,
          "p99": 361.5,
          "p999": 432.7
        },
        "plugins.metrics-by-endpoint.response_time./sencilla": {
          "min": 1,
          "max": 463,
          "count": 1990,
          "mean": 156.8,
          "p50": 175.9,
          "median": 175.9,
          "p75": 183.1,
          "p90": 186.8,
          "p95": 190.6,
          "p99": 361.5,
          "p999": 432.7
        },
        "vusers.session_length": {
          "min": 3021.8,
          "max": 6674.3,
          "count": 48,
          "mean": 6237.2,
          "p50": 6569.8,
          "median": 6569.8,
          "p75": 6569.8,
          "p90": 6569.8,
          "p95": 6702.6,
          "p99": 6702.6,
          "p999": 6702.6
        }
      },
      "histograms": {
        "http.response_time": {
          "min": 1,
          "max": 463,
          "count": 1990,
          "mean": 156.8,
          "p50": 175.9,
          "median": 175.9,
          "p75": 183.1,
          "p90": 186.8,
          "p95": 190.6,
          "p99": 361.5,
          "p999": 432.7
        },
        "plugins.metrics-by-endpoint.response_time./sencilla": {
          "min": 1,
          "max": 463,
          "count": 1990,
          "mean": 156.8,
          "p50": 175.9,
          "median": 175.9,
          "p75": 183.1,
          "p90": 186.8,
          "p95": 190.6,
          "p99": 361.5,
          "p999": 432.7
        },
        "vusers.session_length": {
          "min": 3021.8,
          "max": 6674.3,
          "count": 48,
          "mean": 6237.2,
          "p50": 6569.8,
          "median": 6569.8,
          "p75": 6569.8,
          "p90": 6569.8,
          "p95": 6702.6,
          "p99": 6702.6,
          "p999": 6702.6
        }
      }
    },
    {
      "counters": {
        "http.codes.200": 10,
        "http.responses": 10,
        "http.downloaded_bytes": 210,
        "plugins.metrics-by-endpoint./sencilla.codes.200": 10,
        "http.requests": 8,
        "vusers.failed": 0,
        "vusers.completed": 2
      },
      "rates": {
        "http.request_rate": 8
      },
      "http.request_rate": null,
      "firstCounterAt": 1702742870003,
      "firstHistogramAt": 1702742870003,
      "lastCounterAt": 1702742870037,
      "lastHistogramAt": 1702742870037,
      "firstMetricAt": 1702742870003,
      "lastMetricAt": 1702742870037,
      "period": "1702742870000",
      "summaries": {
        "http.response_time": {
          "min": 4,
          "max": 8,
          "count": 10,
          "mean": 6.2,
          "p50": 7,
          "median": 7,
          "p75": 7,
          "p90": 7,
          "p95": 7,
          "p99": 7,
          "p999": 7
        },
        "plugins.metrics-by-endpoint.response_time./sencilla": {
          "min": 4,
          "max": 8,
          "count": 10,
          "mean": 6.2,
          "p50": 7,
          "median": 7,
          "p75": 7,
          "p90": 7,
          "p95": 7,
          "p99": 7,
          "p999": 7
        },
        "vusers.session_length": {
          "min": 6564.4,
          "max": 6668.8,
          "count": 2,
          "mean": 6616.6,
          "p50": 6569.8,
          "median": 6569.8,
          "p75": 6569.8,
          "p90": 6569.8,
          "p95": 6569.8,
          "p99": 6569.8,
          "p999": 6569.8
        }
      },
      "histograms": {
        "http.response_time": {
          "min": 4,
          "max": 8,
          "count": 10,
          "mean": 6.2,
          "p50": 7,
          "median": 7,
          "p75": 7,
          "p90": 7,
          "p95": 7,
          "p99": 7,
          "p999": 7
        },
        "plugins.metrics-by-endpoint.response_time./sencilla": {
          "min": 4,
          "max": 8,
          "count": 10,
          "mean": 6.2,
          "p50": 7,
          "median": 7,
          "p75": 7,
          "p90": 7,
          "p95": 7,
          "p99": 7,
          "p999": 7
        },
        "vusers.session_length": {
          "min": 6564.4,
          "max": 6668.8,
          "count": 2,
          "mean": 6616.6,
          "p50": 6569.8,
          "median": 6569.8,
          "p75": 6569.8,
          "p90": 6569.8,
          "p95": 6569.8,
          "p99": 6569.8,
          "p999": 6569.8
        }
      }
    }
  ]
}