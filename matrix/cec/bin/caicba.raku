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

# Analise de escolha a pupose
sub MAIN (Str $file, Str $output) {
    my @data = read-data($file);
    my $results = analyze-choices(@data);
    shift %$results;
}

