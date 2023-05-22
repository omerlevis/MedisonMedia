<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use GeoIp2\WebService\Client;
use Illuminate\Support\Facades\Cache;

class RestrictNonIsraelIP
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $ip = $request->ip();

        $countryCode = Cache::remember('country_code_'.$ip, 3600, function () use ($ip) {
            $client = new Client(env('MaxMind_AacountID'), env('MaxMind_APIKEY'), ['en'], ['host' => 'geolite.info']);
            $record = $client->country($ip);
            return $record->country->isoCode;
        });

        if ($countryCode !== 'IL') {
            return response()->view('not-from-israel', [], 403);
        }

        return $next($request);
    }

}
