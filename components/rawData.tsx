const rawData = [
    { date: "2025-02-15", users: 40 },
    { date: "2025-02-16", users: 40 },
    { date: "2025-02-17", users: 40 },
    { date: "2025-02-18", users: 40 },
    { date: "2025-02-19", users: 41 },
    { date: "2025-02-20", users: 42 },
    { date: "2025-02-21", users: 42 },
    { date: "2025-02-22", users: 42 },
    { date: "2025-02-23", users: 42 },
    { date: "2025-02-24", users: 42 },
    { date: "2025-02-25", users: 44 },
    { date: "2025-02-26", users: 46 },
    { date: "2025-02-27", users: 46 },
    { date: "2025-02-28", users: 47 },
    { date: "2025-03-01", users: 47 },
    { date: "2025-03-02", users: 50 },
    { date: "2025-03-03", users: 54 },
    { date: "2025-03-04", users: 59 },
    { date: "2025-03-05", users: 60 },
    { date: "2025-03-06", users: 62 },
    { date: "2025-03-07", users: 64 },
    { date: "2025-03-08", users: 68 },
    { date: "2025-03-09", users: 71 },
    { date: "2025-03-10", users: 73 },
    { date: "2025-03-11", users: 75 },
    { date: "2025-03-12", users: 76 },
    { date: "2025-03-13", users: 78 },
    { date: "2025-03-14", users: 78 },
    { date: "2025-03-15", users: 78 },
    { date: "2025-03-16", users: 80 },
    { date: "2025-03-17", users: 81 },
    { date: "2025-03-18", users: 83 },
    { date: "2025-03-19", users: 85 },
    { date: "2025-03-20", users: 86 },
    { date: "2025-03-21", users: 88 },
    { date: "2025-03-22", users: 89 },
    { date: "2025-03-23", users: 90 },
    { date: "2025-03-24", users: 91 },
    { date: "2025-03-25", users: 92 },
    { date: "2025-03-26", users: 94 },
    { date: "2025-03-27", users: 95 },
    { date: "2025-03-28", users: 96 },
    { date: "2025-03-29", users: 98 },
    { date: "2025-03-30", users: 102 },
    { date: "2025-03-31", users: 102 },
    { date: "2025-04-01", users: 102 },
    { date: "2025-04-02", users: 102 },
    { date: "2025-04-03", users: 102 },
    { date: "2025-04-04", users: 102 },
    { date: "2025-04-05", users: 102 },
    { date: "2025-04-06", users: 102 },
    { date: "2025-04-07", users: 102 },
    { date: "2025-04-08", users: 105 },
    { date: "2025-04-09", users: 105 },
    { date: "2025-04-10", users: 105 },
    { date: "2025-04-11", users: 105 },
    { date: "2025-04-12", users: 109 },
    { date: "2025-04-13", users: 110 },
    { date: "2025-04-14", users: 113 },
    { date: "2025-04-15", users: 113 },
    { date: "2025-04-16", users: 115 },
    { date: "2025-04-17", users: 116 },
    { date: "2025-04-18", users: 117 },
    { date: "2025-04-19", users: 117 },
    { date: "2025-04-20", users: 118 },
    { date: "2025-04-21", users: 120 },
    { date: "2025-04-22", users: 124 },
    { date: "2025-04-23", users: 127 },
    { date: "2025-04-24", users: 131 },
    { date: "2025-04-25", users: 134 },
    { date: "2025-04-26", users: 134 },
    { date: "2025-04-27", users: 136 },
    { date: "2025-04-28", users: 139 },
    { date: "2025-04-29", users: 140 },
    { date: "2025-04-30", users: 144 },
    { date: "2025-05-01", users: 145 },
    { date: "2025-05-02", users: 147 },
  
    { date: "2025-05-03", users: 147 },
    { date: "2025-05-04", users: 147 },
    { date: "2025-05-05", users: 154 },
    { date: "2025-05-06", users: 156 },
    { date: "2025-05-07", users: 157 },
    { date: "2025-05-08", users: 157 },
    { date: "2025-05-09", users: 158 },
    { date: "2025-05-10", users: 158 },
    { date: "2025-05-11", users: 160 },
    { date: "2025-05-12", users: 166 },
    { date: "2025-05-13", users: 174 },
    { date: "2025-05-14", users: 175 },
  
    { date: "2025-05-15", users: 180 },
    { date: "2025-05-16", users: 183 },
    { date: "2025-05-17", users: 185 },
    { date: "2025-05-18", users: 187 },
    { date: "2025-05-19", users: 195 },
    { date: "2025-05-20", users: 196 },
    { date: "2025-05-21", users: 202 },
    { date: "2025-05-22", users: 202 },
    { date: "2025-05-23", users: 203 },
    { date: "2025-05-24", users: 205 },
    { date: "2025-05-25", users: 205 },
    { date: "2025-05-26", users: 206 },
    { date: "2025-05-27", users: 206 },
    { date: "2025-05-28", users: 207 },
    { date: "2025-05-29", users: 208 },
    { date: "2025-05-30", users: 210 },
    { date: "2025-05-31", users: 213 },
    { date: "2025-06-01", users: 213 },
    { date: "2025-06-02", users: 217 },
    { date: "2025-06-03", users: 218 },
    { date: "2025-06-04", users: 222 },
    { date: "2025-06-05", users: 222 },
    { date: "2025-06-06", users: 225 },
    { date: "2025-06-07", users: 225 },
    { date: "2025-06-08", users: 227 },
    { date: "2025-06-09", users: 227 },
    { date: "2025-06-10", users: 229 },
    { date: "2025-06-11", users: 233 },
    { date: "2025-06-12", users: 235 },
    { date: "2025-06-13", users: 239 },
    { date: "2025-06-14", users: 240 },
    { date: "2025-06-15", users: 244 },
    { date: "2025-06-16", users: 245 },

    { date: "2025-06-17", users: 256 },
    { date: "2025-06-18", users: 264 },
    { date: "2025-06-19", users: 268 },
    { date: "2025-06-20", users: 271 },
    { date: "2025-06-21", users: 272 },
    { date: "2025-06-22", users: 277 },
    { date: "2025-06-23", users: 281 },
    { date: "2025-06-24", users: 284 },
    { date: "2025-06-25", users: 288 },
    { date: "2025-06-26", users: 295 },
    { date: "2025-06-27", users: 299 },
    { date: "2025-06-28", users: 300 },
    { date: "2025-06-29", users: 301 },
    { date: "2025-06-30", users: 301 },

    { date: "2025-07-01", users: 302 },
    { date: "2025-07-02", users: 307 },
    { date: "2025-07-03", users: 312 },
    { date: "2025-07-04", users: 317},
    { date: "2025-07-05", users: 319 },
    { date: "2025-07-06", users: 321 },
    { date: "2025-07-07", users:322 },
    { date: "2025-07-08", users:328 },
    { date: "2025-07-09", users:331 },
    { date: "2025-07-10", users: 333 },

    { date: "2025-07-11", users: 336 },
    { date: "2025-07-12", users: 337 },
    { date: "2025-07-13", users: 343 },
    { date: "2025-07-14", users: 345 },
    { date: "2025-07-15", users: 346 },

    { date: "2025-07-16", users: 347 },
    { date: "2025-07-17", users: 353 },
    { date: "2025-07-18", users: 240 },



  ]

  export default rawData;
