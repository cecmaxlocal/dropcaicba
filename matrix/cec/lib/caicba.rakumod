#!/usr/bin/env raku

use v6;
use lib 'path/to/your/lib';
use strict;

sub read-data (Str $file) {
    return slurp($file).lines;
}

sub analyze-choices (@data) {
    my %results;
    for @data -> $line {
        my ($choice, $value) = $line.split(':');
        %results{$choice} += $value.Int;
    }
    return %results;
}

sub refine-data (@data) {
    return @data.map({ $_.trim }).grep({ $_ ne '' });
}

sub analyze-averages (@data) {
    my %totals;
    my %counts;
    for @data -> $line {
        my ($choice, $value) = $line.split(':');
        %totals{$choice} += $value.Int;
        %counts{$choice}++;
    }
    return %totals.map({ $_ / %counts{$_} });
}

sub write-output (Str $output, %results, %averages) {
    spurt $output, "Results: " ~ %results.perl ~ "\nAverages: " ~ %averages.perl;
}

